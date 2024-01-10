import React from 'react';
import Board from 'components/Board';
import { DoubleBoardInterface } from './DoubleBoard.interface';
import { DoubleBoardStyled } from './DoubleBoard.styled';

const DoubleBoard: React.FC<DoubleBoardInterface> = ({children, ...props}) =>{

    return(

        <DoubleBoardStyled {...props}>

            {children}
        </DoubleBoardStyled>
    );
}

export default DoubleBoard;