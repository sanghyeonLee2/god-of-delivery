import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";


export const HeaderOuter = styled.header`
  background-color: #FFEB00;
  height: 92px;
`

export const HeaderInner = styled.div`
  ${flexLayout("space-between", "center")};
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
`
export const HeaderAddress = styled.div`
`
export const AuthBtnWrap = styled.section`
  width: 270px;

  button {
    margin-left: 5px;
  }
`