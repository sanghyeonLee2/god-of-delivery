import { css } from "styled-components";
import { COLORS } from "./colors";

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
  border: 1px solid gray;
  border-radius: 10px;
`;

export const boxHover = () => css`
  transition: all 0.2s ease;
  transform: translateY(0);
  box-shadow: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const textHover = () => css`
  &:hover {
    color: ${COLORS.BTN.SUB};
  }
`;
