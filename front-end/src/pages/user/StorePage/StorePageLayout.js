import styled from "styled-components";
import { elementSize, flexLayout } from "../../../assets/styles/Mixin";
import { innerPadding } from "../../../assets/styles/CommonStyle";

export const StoreOuter = styled.div`
  padding-top: 60px;
  max-width: 800px;
  margin: 0 auto;
`;
export const MenuTab = styled.div`
  ${elementSize("33.33%", "60px")};
  ${flexLayout("center", "center")};
  border-right: ${({ $isOn }) => $isOn && "grey 1px solid"};
  border-left: ${({ $isOn }) => $isOn && "grey 1px solid"};
  border-top: ${({ $isOn }) => ($isOn ? "black 3px solid" : "transparent 3px solid ")};
  border-bottom: ${({ $isOn }) => ($isOn ? "transparent 1px solid" : "grey 1px solid")};
`;
export const TabWrap = styled.div`
  ${innerPadding()}
`;
