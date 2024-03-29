import React, {RefAttributes, useRef} from "react";
import { PokemonStatsBoardInterface } from "./PokemonStatsBoard.interface";
import Horizontal from "components/Horizontal";
import Vertical from "components/Vertical";
import FlexableSpace from "components/FlexableSpace";
import ProgressBar from "components/ProgressBar";
import DoubleBoard from "components/DoubleBoard";
import WhiteBoard from "components/WhiteBoard";
import SpecialBoard from "components/SpecialBoard";

const PokemonStatsBoard : React.FC<PokemonStatsBoardInterface> =({pokemon}) =>{

    return (

        <WhiteBoard>
           
           <Horizontal >
                <FlexableSpace />
                    <Vertical>

                        <img src={pokemon?.sprite}/>
                        <FlexableSpace />

                        <Horizontal>
                            <FlexableSpace />
                                <p>No. {pokemon?.data.id}</p>
                            <FlexableSpace />
                        </Horizontal>
                       

                    </Vertical>
                <FlexableSpace />

                <SpecialBoard>
                <Vertical>

                    <p>{pokemon?.name}</p>
                    
                    <Horizontal style={{width:"125px"}}>

                        <FlexableSpace/>

                       
                            <p>HP:</p>
                        
                        
                      
                       
                        
                       
                        <Vertical style={{width:"75px"}}>
                            <FlexableSpace/>

                            <Horizontal>
                                <FlexableSpace />
                                    :L 25
                                <FlexableSpace />
                            </Horizontal>

                            <Horizontal>
                        
                                <ProgressBar />

                            </Horizontal>

                            <Horizontal>
                                <FlexableSpace />
                                    {`${pokemon?.stats.hp}/${pokemon?.stats.hp}`}
                                <FlexableSpace />
                            </Horizontal>
                            <FlexableSpace/>
                        </Vertical>
                                
                        
                               
                             
                            
                     
                        
                    </Horizontal>
                   

                        <p>
                            Statue/Ok
                        </p>

                           
                
                </Vertical>
                </SpecialBoard>
               
              

               
            </Horizontal>

            <Horizontal>

                <DoubleBoard>

                <Vertical style={{width:'100px'}}>

                    <span>Attack</span>

                    <Horizontal>
                        <FlexableSpace/>
                        <span>{pokemon?.stats.attack}</span>
                    </Horizontal>
                    <span>Defense</span>
                    <Horizontal>
                        <FlexableSpace/>
                        <span>{pokemon?.stats.defense}</span>
                    </Horizontal>

                    <span>Speed</span>
                    <Horizontal>
                        <FlexableSpace/>
                        <span>{pokemon?.stats.speed}</span>
                    </Horizontal>

                    <span>Sp.Att</span>
                    <Horizontal>
                        <FlexableSpace/>
                        <span>{pokemon?.stats["special-attack"]}</span>
                    </Horizontal>

                    <span>Sp.Def</span>
                    <Horizontal>
                        <FlexableSpace/>
                        <span>{pokemon?.stats["special-defense"]}</span>
                    </Horizontal>
                </Vertical>

                </DoubleBoard>

                
                <Vertical style={{minWidth:"100px"}}>
                <SpecialBoard>
                   <Horizontal>
                    <span>type/</span>
                    <FlexableSpace/>

                   </Horizontal>

                   <Horizontal>
                    <FlexableSpace/>
                     <span>{pokemon?.pokemonType}</span>
                   

                   </Horizontal>


                   <Horizontal>
                    <span>ID No./</span>
                    <FlexableSpace/>

                   </Horizontal>

                   <Horizontal>
                    <FlexableSpace/>
                     <span>247076</span>
                   </Horizontal>

                   <Horizontal>
                    <span>OT/</span>
                    <FlexableSpace/>

                   </Horizontal>

                   <Horizontal>
                    <FlexableSpace/>
                     <span>Ash</span>
                     
                   </Horizontal>

                  

                   
                  

                   </SpecialBoard>
                </Vertical>
                


            </Horizontal>
           

        </WhiteBoard>

    );
}

export default PokemonStatsBoard;