import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";
import {innerPadding} from "../../../assets/styles/CommonStyle";


export const FooterWrap = styled.footer`
    ${innerPadding()};
    position: relative;
    border-top: 1px solid #d9d9d9;
    height: 92px;
`
export const FooterInner = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
    ${flexLayout("space-between", "center")};
`
