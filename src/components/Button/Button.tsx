import React from 'react';
import { ButtonStyle } from './Button.styled';
import { ButtonInterface } from './Button.interface';

const Button : React.FC<ButtonInterface> = ({label}) =>{

    return(

       <ButtonStyle>

            {label}

       </ButtonStyle>
    );
}

export default Button;