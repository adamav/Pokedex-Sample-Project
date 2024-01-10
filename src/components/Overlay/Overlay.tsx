import React from 'react';
import { OverlayDiv } from './Overlay.styled';

const Overlay = ({children}:any) =>{

    return (


        <OverlayDiv>
            {children}
        </OverlayDiv>
    );
}

export default Overlay;