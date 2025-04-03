import styled from "styled-components";
import { elementSize, flexLayout } from "@assets/styles/Mixin";
import { innerPadding } from "@assets/styles/CommonStyle";

export const MenuTab = styled.div`
  cursor: pointer;
  ${elementSize("33.33%", "6rem")};
  ${flexLayout("center", "center")};
  border-right: ${({ $isOn }) => $isOn && "grey 0.1rem solid"};
  border-left: ${({ $isOn }) => $isOn && "grey 0.1rem solid"};
  border-top: ${({ $isOn }) => ($isOn ? "black 0.3rem solid" : "transparent 0.3rem solid")};
  border-bottom: ${({ $isOn }) => ($isOn ? "transparent 0.1rem solid" : "grey 0.1rem solid")};
`;

export const TabWrap = styled.div`
  ${innerPadding()}
`;
