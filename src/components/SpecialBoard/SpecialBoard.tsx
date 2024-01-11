import React from 'react';
import { SpecialBoardStyled } from './SpecialBoard.styled';
import { SpecialBoardInterface } from './SpecialBoard.interface';

const SpecialBoard: React.FC<SpecialBoardInterface> = ({children, ...props}) =>{

    return (


            <SpecialBoardStyled {...props}>
                {children}
            </SpecialBoardStyled>
    );


}

export default SpecialBoard;