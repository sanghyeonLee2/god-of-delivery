import styled from "styled-components";
import {elementSize} from "../../../assets/styles/Mixin";

export const CouponWrap = styled.div`
  height: 40px;
  padding-top: 20px;

  div {
    ${elementSize("70%", "80%")}
    border: black 1px solid;
    margin: 0 auto;
    border-radius: 5px;
  }
`