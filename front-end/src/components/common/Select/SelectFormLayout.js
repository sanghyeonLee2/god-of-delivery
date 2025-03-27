import styled from "styled-components";
import { elementSize } from "../../../assets/styles/Mixin";
import { innerPadding } from "../../../assets/styles/CommonStyle";

export const SelectWrap = styled.select`
  ${innerPadding()};
  ${elementSize("100%", "45px")};
`;
