import styled from "styled-components";
import { COLORS } from "../../../assets/styles/colors";
import { innerPadding } from "../../../assets/styles/CommonStyle";
import { elementSize, flexLayout } from "../../../assets/styles/Mixin";

export const MenuDetailTextWrap = styled.div`
  height: 55px;
  ${innerPadding()};
  border-top: 1px solid ${COLORS.BORDER};
  ${flexLayout("space-between", "center")};
`;
export const MenuDetailFixed = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
`;

export const SelectQuantityWrap = styled.div`
  ${elementSize("100px", "30px")};
  ${flexLayout("center", "center")};
  border: 1px solid ${COLORS.BORDER};

  button {
    width: 30%;
  }

  div {
    text-align: center;
    width: 40%;
  }
`;
