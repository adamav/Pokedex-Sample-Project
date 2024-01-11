import React from 'react';
import { GridDiv } from './Grid.styled';
import { GridInterface } from './Grid.interface';

const Grid : React.FC<GridInterface>= ({children, ...props}) =>{

    return (

        <GridDiv {...props}>
            {children}
        </GridDiv>

    );
}

export default Grid;
