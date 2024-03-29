import styled from "styled-components";
import { BoardInterface } from "./Board.interface";

export const BoardStyled = styled.div<BoardInterface>`
    
    background-color:white;
    border-color:black;
    border-width:1px;
    border-radius:10px;
    border-style:solid;
    margin-top:10px;
    margin-bottom:10px;
    padding-left:10px;
    padding-right:10px;

`