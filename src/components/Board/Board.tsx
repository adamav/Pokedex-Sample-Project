import React from 'react';
import { BoardStyled } from './Board.styled';
import { BoardInterface } from './Board.interface';

const Board : React.FC<BoardInterface> = ({children, ...props}) =>{

    return (

        <BoardStyled {...props}>
            {children}
        </BoardStyled>
    );
}

export default Board;