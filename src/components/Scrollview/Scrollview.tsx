import React from 'react';
import { ScrollViewContainer } from './Scrollview.styled';
import { ScrollviewInterface } from './Scrollview.interface';

const Scrollview : React.FC<ScrollviewInterface> = ({children, ...props}) =>{

    return(
        <ScrollViewContainer {...props}>

            {children}

        </ScrollViewContainer>
    );
}

export default Scrollview;