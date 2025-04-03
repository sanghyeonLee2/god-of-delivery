import { css } from "styled-components";
import { COLORS } from "../data/colors";

export const flexLayout = (justify = "flex-start", align = "flex-start") => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const elementSize = (width = "auto", height = "auto") => css`
  width: ${width};
  height: ${height};
`;

export const setBorder = () => css`
  border: 0.1rem solid ${COLORS.BORDER};
  border-radius: 1rem;
`;

export const boxHover = () => css`
  transition: all 0.2s ease;
  box-shadow: none;

  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.08);
  }
`;

export const textHover = () => css`
  &:hover {
    color: ${COLORS.BTN.SUB};
  }
`;
