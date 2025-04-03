import styled from "styled-components";
import { elementSize } from "@assets/styles/Mixin";
import { COLORS } from "@constants/colors";

export const OrderTabWrap = styled.ul`
  display: flex;
  border-bottom: ${COLORS.BORDER} 0.1rem solid;
  margin-top: 2rem;

  li {
    text-align: center;
    ${elementSize("50%", "4rem")}
  }
`;

export const OrderTypeText = styled.span`
  font-size: 1.6rem;
  display: inline-block;
  border-bottom: ${({ $isOn }) => ($isOn ? "black 0.5rem solid" : "transparent 0.5rem solid")};
  box-sizing: border-box;
  height: 100%;
`;
