import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import styled from "styled-components";
import {exampleColor} from "../../../assets/styles/CommonStyle";

export const StoreHeaderWrap = styled.div`
    text-align: center;

    > div {
        margin-bottom: 18px;
    }
`
export const StoreImgWrap = styled.div`
    ${elementSize("100%", "250px")}
    ${exampleColor()}
`
export const ReviewWrap = styled.div`
    ${flexLayout("center")}
`