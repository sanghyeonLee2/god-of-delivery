import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const PaginationWrap = styled.div`
    height: 60px;
    align-content: center;
`

export const PaginationInner = styled.div`
    margin: 0 auto;
    max-width: 800px;
    height: 40px;
    ${flexLayout("center", "center")};

    button {
        ${elementSize("32px", "32px")};
        border-radius: 500px;
    }
`