import styled from "styled-components";
import { GridInterface } from "./Grid.interface";

export const GridDiv = styled.div<GridInterface>`
    
     
    display:flex;
    flex-direction:row;
    position:relative;
    flex-wrap:wrap;
  
    justify-content:space-around;
    gap: 2px;
`