import styled from "styled-components";
import {elementSize} from "../../../assets/styles/Mixin";


export const OrderTabWrap = styled.ul`
    display: flex;
    border-bottom: lightgray 1px solid;
    margin-top: 20px;

    li {
        text-align: center;
        ${elementSize("50%", "40px")}
    }
`

export const OrderTypeText = styled.span`
    display: inline-block;
    border-bottom: ${(props) => props.value ? "black 5px solid" : "transparent 5px solid"};
    box-sizing: border-box;
    height: 100%;
`
