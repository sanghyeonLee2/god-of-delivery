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

export const StoreInfoWrap = styled.div`
    padding: 8px 20px;

    svg {
        color: #FFD700;
        margin-bottom: 4px;
    }
`
export const AverageTimeWrap = styled.div`
    position: absolute;
    right: 12px;
`