import React from "react";
import { PokemonDetailsBoardInterface } from "./PokemonDetailsBoard.interface";
import Board from "components/Board";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";
import Vertical from "components/Vertical";
import HorizontalLine from "components/HorizontalLine";
import Scrollview from "components/Scrollview/Scrollview";

//displays basic  details 
const PokemonDetialsBoard : React.FC<PokemonDetailsBoardInterface> = ({pokemon}) =>{


    return(

       <Board>

            <Horizontal>
                <FlexableSpace />
                    <Vertical>

                        <img src={pokemon?.data.sprites.front_default}/>
                        <FlexableSpace />

                        <Horizontal>
                            <FlexableSpace />
                                <p>No. {pokemon?.data.id}</p>
                            <FlexableSpace />
                        </Horizontal>
                       

                    </Vertical>
                <FlexableSpace />
                <Vertical>

                    <p>{pokemon?.data.name}</p>
                    <p>HT. {pokemon?.data.height}</p>
                    <p>WT. {pokemon?.data.weight}</p>

                </Vertical>
                <FlexableSpace/>

               
            </Horizontal>

            <HorizontalLine />

            <Horizontal>

                <Scrollview style={{width:"250px", height:"100px"}}>

                    <p>{pokemon?.descriptionText}</p>
                </Scrollview>
                
            </Horizontal>

           
       </Board>
    );
}

export default PokemonDetialsBoard;