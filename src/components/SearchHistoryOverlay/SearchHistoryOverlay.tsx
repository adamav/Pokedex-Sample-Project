import React from "react";
import Overlay from "components/Overlay";
import Header from "components/Header";
import WhiteBoard from "components/WhiteBoard";
import Vertical from "components/Vertical";
import Button from "components/Button";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";
import Scrollview from "components/Scrollview";
import { useSelector } from "react-redux";
import { getSearchHistory } from "store/search-history/search-history.selectors";
import { SearchHistoryOverlayInterface } from "./SearchHistoryOverlay.interface";
import { useAppDispatch } from "store/store";
import { deleteSeachHistoryWithIndex } from "store/search-history/search-history.actions";
const SeachHistoryOverlay: React.FC<SearchHistoryOverlayInterface> = ({show, onClickItem, onClose}) =>{

    const appDispatch = useAppDispatch();

    const searchHistory = useSelector(getSearchHistory);

    if(!show)
    return null

    const handleOnSearchItemSelcted = (name:string) =>{

        if(onClickItem)
        onClickItem(name)
    }

    const handleDeletion  =(id: number) =>{

        appDispatch(deleteSeachHistoryWithIndex(id));
    }
   
    return(

        <Overlay>

            <WhiteBoard>
                
            <Header label="Search History"/>

           
            {searchHistory.length <=0 &&

                <Horizontal>
                    <FlexableSpace/>
                    <span>No search history</span>
                    <FlexableSpace/>
                </Horizontal>
               
            }

            <Vertical style={{minHeight:"75vh"}}>

                <Scrollview>

                    {searchHistory.map(({name, image}, index) =>{

                        return (

                            <Vertical key={index}>

                                <Horizontal>
                                  
                                    <FlexableSpace/>
                                        <span>{name}</span>
                                    <FlexableSpace/>
                                           
                                    
                                </Horizontal>
                                <Horizontal>


                                    <FlexableSpace/>
                                      
                                
                                    <img src={image}/>
                                
                                    <Vertical>
                                        <FlexableSpace/>

                                        <Button label="Select" onClick={() =>handleOnSearchItemSelcted(name)}/>
                                    
                                        <FlexableSpace/>
                                    </Vertical>

                                    <Vertical>
                                        <FlexableSpace/>

                                        <Button label="X" onClick={() => handleDeletion(index)}/>
                                    
                                        <FlexableSpace/>
                                    </Vertical>

                                    <FlexableSpace/>
                                </Horizontal>
                            </Vertical>
                        );
                    })}

                </Scrollview>

                <FlexableSpace/>

                <Horizontal>
                    <FlexableSpace/>
                        <Button label="Close" onClick={onClose}/>
                    <FlexableSpace/>
                </Horizontal>
                

            </Vertical>
            </WhiteBoard>
           

        </Overlay>

    );
}

export default SeachHistoryOverlay;