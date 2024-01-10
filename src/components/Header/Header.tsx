import React from 'react';
import { HeaderStyled } from './Header.styled';
import { HeaderInterface } from './Header.interface';

const Header : React.FC<HeaderInterface> = ({label}) =>{

    return(

        <HeaderStyled>
            {label}
        </HeaderStyled>
    );

}

export default Header;