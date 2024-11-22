import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";


export const FooterWrapper = styled.footer`
    position: relative;
    transform: translateY(-100%);
    border-top: 1px solid #d9d9d9;
`
export const FooterMenuOuter = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    ${flexLayout("space-between")};
`
export const FooterMenuLeft = styled.ul`
    padding: 13px 10px;
    width: 70%;
    margin-right: 150px;
    ${flexLayout("space-between")}
`

export const FooterMenuRight = styled.ul`
    padding: 15px 20px;
    width: 30%;
    ${flexLayout("space-between")}
`

export const FooterInfoInner = styled.div`
    max-width: 1100px;
    ${flexLayout("space-between")}
    margin: 0 auto;
    padding: 13px 10px;
`
