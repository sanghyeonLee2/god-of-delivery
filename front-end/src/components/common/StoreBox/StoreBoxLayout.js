import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const StoreOuter = styled.li`
    height: 135px;
    width: 50%;
    @media (max-width: 880px ) {
        width: 100%;
    }
    margin-bottom: 14px;
    padding: 0 10px;
    box-sizing: border-box;
`
export const StoreInner = styled.div`
    padding: 0 20px;
    border: lightgray 1px solid;
    height: 100%;
    ${flexLayout("stretch", "center")}
    position: relative;
`
export const StoreLogo = styled.div`
    background-color: brown;
    ${elementSize("95px", "95px")}`

export const StoreInfoWrap = styled.div`
    padding: 8px 20px;

`
export const AverageTimeWrap = styled.li`
    position: absolute;
    right: 12px;
`
