import React from 'react';
import WhiteBoard from 'components/WhiteBoard';
import Horizontal from 'components/Horizontal';
import FlexableSpace from 'components/FlexableSpace';
import Vertical from 'components/Vertical';
import DoubleBoard from 'components/DoubleBoard';
import VerticalLine from 'components/VerticalLine';
import ProgressBar from 'components/ProgressBar';
import SpecialBoard from 'components/SpecialBoard';
import Grid from 'components/Grid';
import { BattleBoardInterface } from './BattleBoard.interface';

const BattleBoard : React.FC<BattleBoardInterface> = ({pokemone}) =>{

    return(

        <WhiteBoard>

            <Vertical>

           
           {/** */}

           <Horizontal>
                   


               <Vertical style={{width:"100px"}}>


                ??????


                <SpecialBoard style={{borderLeftWidth:"2px", borderRightWidth:0}} >
                    <Horizontal>
                        

                        <Vertical>
                            <Horizontal>
                                <FlexableSpace/>
                                <span>???</span>
                                <FlexableSpace/>
                            </Horizontal>


                        <Horizontal>

                        

                            

                            <span>HP:</span>

                            <Vertical style={{width:"50px"}}>
                                <FlexableSpace/>
                                    <ProgressBar/>
                                <FlexableSpace/>
                            </Vertical>

                        

                        </Horizontal>

                        <Horizontal>
                            <FlexableSpace/>
                            <span>???/???</span>
                            <FlexableSpace/>
                        </Horizontal>

                        <FlexableSpace/>

                            
                        

                        
                    

                        </Vertical>

                    </Horizontal>
                </SpecialBoard>





                </Vertical>

                <FlexableSpace/>

                   <Vertical>
                       <FlexableSpace/>
                       
                           ?
                            
                    <FlexableSpace/>
                   </Vertical>

                  

               

           </Horizontal>
        
            {/** */}

                <Horizontal>
                   

                        <Vertical>
                            <FlexableSpace/>
                            
                            <img src={pokemone?.back_sprite}/>

                                 
                         <FlexableSpace/>
                        </Vertical>

                       

                    <FlexableSpace/>

                    <Vertical style={{width:"100px"}}>


                        {pokemone?.name}


                        <SpecialBoard>
                            <Horizontal>
                                <FlexableSpace/>

                                <Vertical>
                                    <Horizontal>
                                        <FlexableSpace/>
                                        <span>{pokemone?.id}</span>
                                        <FlexableSpace/>
                                    </Horizontal>


                                <Horizontal>

                                

                                    

                                    <span>HP:</span>

                                    <Vertical style={{width:"50px"}}>
                                        <FlexableSpace/>
                                            <ProgressBar/>
                                        <FlexableSpace/>
                                    </Vertical>

                                

                                </Horizontal>

                                <Horizontal>
                                    <FlexableSpace/>
                                    <span>{`${pokemone?.stats.hp}/${pokemone?.stats.hp}`}</span>
                                    <FlexableSpace/>
                                </Horizontal>

                                    
                                

                                
                            

                                </Vertical>

                            </Horizontal>
                        </SpecialBoard>
                      
                      
                       


                    </Vertical>
                </Horizontal>

                <DoubleBoard>
                    <Horizontal>

                        <FlexableSpace/>

                        <DoubleBoard>

                            <Grid style={{width:"100px"}}>
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                            </Grid>

                        <FlexableSpace/>
                        </DoubleBoard>

                    </Horizontal>
                </DoubleBoard>

            </Vertical>
           
            

        </WhiteBoard>

    );
}

export default BattleBoard;