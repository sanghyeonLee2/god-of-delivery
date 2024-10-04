import styled from "styled-components";
import {elementSize, flexLayout} from "../../assets/styles/Mixin";

export const StoreOuter = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 30px;
`


export const MenuToggleWrap = styled.ul`
  display: flex;

  li {
    ${elementSize("33.33%", "60px")}
  }
`
export const MenuToggleDiv = styled.div`
  ${flexLayout("center", "center")};
  border-top: ${(props) => props.value ? "black 3px solid" : "transparent 3px solid "};
  border-bottom: ${(props) => props.value ? "transparent 1px solid" : "grey 1px solid"};
  height: 100%;
`

export const MenuInfoTapInner = styled.div`
  > div {
    padding: 15px 10px;
  }
`

