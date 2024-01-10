import React from 'react';
import { SpecialBoardStyled } from './SpecialBoard.styled';

const SpecialBoard = ({children}:any) =>{

    return (


            <SpecialBoardStyled>
                {children}
            </SpecialBoardStyled>
    );


}

export default SpecialBoard;