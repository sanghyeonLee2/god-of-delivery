import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const StoreOuter = styled.li`
    ${elementSize("49.5%", "135px")};
    @media (max-width: 880px ) {
        width: 100%;
    }
    margin-bottom: 14px;
    box-sizing: border-box;
    padding: 0 20px;
    border: lightgray 1px solid;
    ${flexLayout("stretch", "center")}
    position: relative;
`

export const StoreLogo = styled.div`
    background-color: brown;
    ${elementSize("95px", "95px")}`

export const StoreInfoWrap = styled.div`
    padding: 8px 20px;
`
export const AverageTimeWrap = styled.div`
    position: absolute;
    right: 12px;
`
