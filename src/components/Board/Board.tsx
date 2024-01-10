import React from 'react';
import { BoardStyled } from './Board.styled';
import { BoardInterface } from './Board.interface';

const Board : React.FC<BoardInterface> = ({children}) =>{

    return (

        <BoardStyled>
            {children}
        </BoardStyled>
    );
}

export default Board;