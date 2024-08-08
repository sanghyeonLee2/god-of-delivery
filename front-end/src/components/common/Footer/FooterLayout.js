import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin,js";


export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
`
export const FooterMenuOuter = styled.div`
  ${flexLayout("center")}
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
`
export const FooterMenuInner = styled.div`
  ${flexLayout("center")}
  width: 60%;
`
export const FooterMenuLeftUl = styled.ul`
  padding: 15px 20px;
  width: 70%;
  margin-right: 150px;
  ${flexLayout("space-between")}
`

export const FooterMenuRightUl = styled.ul`
  padding: 15px 20px;
  width: 20%;
  ${flexLayout("space-between")}
`
export const FooterInfoOuter = styled.div`
  ${flexLayout("center")}`

export const FooterInfoInner = styled.div`
  width: 50%;
  ${flexLayout("space-between")}
`
export const FooterAsideInfo = styled.div`
  margin-top: 20px;
`
