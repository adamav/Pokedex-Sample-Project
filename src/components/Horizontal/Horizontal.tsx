import React from 'react';
import { HorizonatlDiv } from './Horizontal.styled';
import { HorizontalInteface } from './Horizontal.interface';

const Horizontal: React.FC<HorizontalInteface> = ({children}) =>{

    return (

        <HorizonatlDiv>
            {children}
        </HorizonatlDiv>

    );
}

export default Horizontal;