import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";


export const OrderMethodWrap = styled.div`
`
export const OrderToggleWrap = styled.ul`
  display: flex;
  border-bottom: grey 1px solid;
  margin-top: 20px;

  li {
    ${flexLayout("center", "center")};
    ${elementSize("50%", "30px")}
  }
`
export const OtherToggleSpan = styled.span`
  margin-bottom: 3px;
  border-bottom: ${(props) => props.value && "black 5px solid"};
  height: 100%;
`
export const OrderInfoWrap = styled.div`
  padding: 20px 10px;
  border-bottom: grey 1px solid;

  li {
    margin-bottom: 4px;
  }
`