import styled from "styled-components";
import {elementSize} from "../../assets/styles/Mixin";

export const StoreOuter = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 30px;
`


export const MenuToggleWrap = styled.ul`
  display: flex;
  border-bottom: grey 1px solid;


  li {
    padding-top: 20px;
    ${elementSize("33.33%", "40px")}
    text-align: center;
  }

  span {
  }
`


export const MenuInfoTapWrap = styled.div`
`

