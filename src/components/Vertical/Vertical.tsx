import React from 'react';
import { VerticalDiv } from './Vertical.styled';
import { VerticalInterface } from './Vertical.interface';


//used to handling vertical layoutting
const Vertical: React.FC<VerticalInterface> = ({children, ...props}) =>{

    return(
        <VerticalDiv {...props}>

            {children}

        </VerticalDiv>
    );
}

export default Vertical;