import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import {innerPadding} from "../../../assets/styles/CommonStyle";


export const SortingOuter = styled.div`
    border-bottom: lightgray 1px solid;
    border-top: lightgray 1px solid;
    height: 55px;
`

export const SortingInner = styled.div`
    ${innerPadding()};
    ${flexLayout("space-between", "center")};
    flex-direction: row-reverse;
    margin: 0 auto;
    width: 100%;
    max-width: 1100px;
    height: 100%;

    select {
        ${elementSize("49%", "100%")}
    }

    select:nth-child(2) {
        display: none;
        @media (max-width: 880px ) {
            display: inline-block;
        }
    }
`
