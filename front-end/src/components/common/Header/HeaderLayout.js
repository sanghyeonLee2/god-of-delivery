import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";


export const HeaderOuter = styled.header`
    height: 92px;
    padding: 0 30px;
`

export const HeaderInner = styled.div`
    ${flexLayout("space-between", "center")};
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
`
