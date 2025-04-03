import styled from "styled-components";
import { COLORS } from "@constants/colors";
import { innerPadding } from "@assets/styles/CommonStyle";
import { elementSize, flexLayout } from "@assets/styles/Mixin";

export const MenuDetailTextWrap = styled.div`
  height: 5.5rem;
  ${innerPadding()};
  border-top: 0.1rem solid ${COLORS.BORDER};
  ${flexLayout("space-between", "center")};
`;
export const MenuDetailFixed = styled.div`
  position: absolute;
  bottom: 6rem;
  width: 100%;
`;

export const SelectQuantityWrap = styled.div`
  ${elementSize("10rem", "3rem")};
  ${flexLayout("space-between", "center")};
  border: 1px solid ${COLORS.BORDER};
  box-sizing: content-box;
  border-radius: 0.4rem;

  button {
    width: 30%;

    &:hover {
      background-color: ${COLORS.HOVER};
    }
  }

  div {
    text-align: center;
    width: 40%;
  }
`;
