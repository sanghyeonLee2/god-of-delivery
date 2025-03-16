import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const AddressBoxOuter = styled.li`
    margin-top: 20px;
    ${elementSize("100%", "150px")};
    border: grey 1px solid;
    ${flexLayout("center")};
`

export const AddressBoxLeft = styled.div`
    ${elementSize("9%", "100%")};
    ${flexLayout("center", "center")};
`

export const AddressBoxMiddle = styled.div`
    ${elementSize("82%", "100%")};
`
export const MiddleInner = styled.div`
    ${elementSize("250px", "100%")};
    ${flexLayout("space-evenly")};
    flex-direction: column;
    margin-left: 10px;
`
export const RoadAddress = styled.div`
`

export const AddressBoxRight = styled.div`
    ${elementSize("9%", "100%")};
    ${flexLayout("center", "center")};
`