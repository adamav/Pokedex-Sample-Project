import React, {useState} from 'react';
import Overlay from 'components/Overlay';
import WhiteBoard from 'components/WhiteBoard';
import Header from 'components/Header';
import { EvolutionOverlayInterface } from './EvolutionOverlay.interface';
import Vertical from 'components/Vertical';
import Horizontal from 'components/Horizontal';
import FlexableSpace from 'components/FlexableSpace';
import Button from 'components/Button';


const EvolutionOverlay : React.FC<EvolutionOverlayInterface>= ({show, pokemon, onSelectEvolution, onClose, ...props}) =>{

    const [evolutionIndex, setEvolutionIndex] = useState<number>(0);

    const {name, image} = pokemon?.allEvolutionData[evolutionIndex];

    const handlePreviouClick = () =>{

        setEvolutionIndex(prev => prev -1 >= 0 ? prev -1 : 0)
    }

    const handleNextClick = () =>{

        setEvolutionIndex(prev => prev +1 < pokemon?.allEvolutionData.length -1? prev + 1 :pokemon?.allEvolutionData.length -1)
    }

    const handleOnSelectClick = () =>{

        if(onSelectEvolution)
            onSelectEvolution(name);
    }

    const handleCoseCLick = () =>{

        if(onClose)
        onClose();
    }

    if(!show)
        return;



    return (

        <Overlay>

            <WhiteBoard>

                <Horizontal>
                    <FlexableSpace/>
                    <Header label='Evolutions'/>
                    <FlexableSpace/>
                </Horizontal>

                <Vertical style={{minHeight:"75vh"}}>
                    <FlexableSpace/>


                        <Horizontal>
                            <Vertical>
                                <FlexableSpace/>
                                    <Button label='<' onClick={handlePreviouClick}/>
                                <FlexableSpace/>
                            </Vertical>
                           
                            <FlexableSpace/>
                                <Vertical>
                                    <Horizontal>
                                        <FlexableSpace/>
                                            <span>{name}</span>
                                        <FlexableSpace/>
                                    </Horizontal>

                                    <img src={image}/>

                                    <Horizontal>
                                        <FlexableSpace/>
                                        <Button label='Select' onClick={handleOnSelectClick}/>
                                        <FlexableSpace/>
                                    </Horizontal>

                                </Vertical>
                           
                            <FlexableSpace/>

                            <Vertical>
                                <FlexableSpace/>
                                <Button label='>' onClick={handleNextClick}/>
                                <FlexableSpace/>
                            </Vertical>
                        </Horizontal>



                    <FlexableSpace/>
                    <Horizontal>
                        <FlexableSpace/>
                            <Button label='Close' onClick={handleCoseCLick} />
                        <FlexableSpace/>
                    </Horizontal>
                   
                </Vertical>


            </WhiteBoard>

        </Overlay>

    );
}

export default EvolutionOverlay;