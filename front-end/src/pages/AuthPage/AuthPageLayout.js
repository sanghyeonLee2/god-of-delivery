import styled from "styled-components";
import {flexLayout} from "../../assets/styles/Mixin";

export const AuthPageOuter = styled.div`
  ${flexLayout("center")}
`

export const AuthPageInner = styled.div`
  margin-top: 50px;

  h1 {
    text-align: center;
  }
`