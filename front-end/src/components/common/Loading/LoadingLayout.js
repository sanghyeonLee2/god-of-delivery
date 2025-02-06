import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const LoadingWrapper = styled.div`
  ${elementSize("100%", "100%")};
  ${flexLayout("center", "center")};
  flex-direction: column;

  p {
    padding: 5px;
  }
`