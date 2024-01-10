import React from 'react';
import { HorizonatlDiv } from './Horizontal.styled';
import { HorizontalInteface } from './Horizontal.interface';


//used to handle horizontal layoutting
const Horizontal: React.FC<HorizontalInteface> = ({children, ...props}) =>{

    return (

        <HorizonatlDiv {...props}>
            {children}
        </HorizonatlDiv>

    );
}

export default Horizontal;