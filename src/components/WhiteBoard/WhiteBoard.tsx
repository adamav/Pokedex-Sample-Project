import React from 'react';
import { WhiteBoardStyled } from './WhiteBoard.styled';

const WhiteBoard = ({children}:any) =>{

    return (

        <WhiteBoardStyled>

            {children}
        </WhiteBoardStyled>

    );
}

export default WhiteBoard;