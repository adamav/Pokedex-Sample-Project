import styled from "styled-components";
import { DoubleBoardInterface } from "./DoubleBoard.interface";
export const DoubleBoardStyled = styled.div<DoubleBoardInterface>`
    
    background-color:white;
    border-color:black;
    border-width:3px;
    border-radius:10px;
    border-style:double;
    margin-top:10px;
    margin-bottom:10px;
    padding-left:10px;
    padding-right:10px;

`