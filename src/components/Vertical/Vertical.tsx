import React from 'react';
import { VerticalDiv } from './Vertical.styled';
import { VerticalInterface } from './Vertical.interface';


//used to handling vertical layoutting
const Vertical: React.FC<VerticalInterface> = ({children}) =>{

    return(
        <VerticalDiv>

            {children}

        </VerticalDiv>
    );
}

export default Vertical;