import styled, { css } from "styled-components";
import { flexLayout, setBorder, textHover } from "./Mixin";
import { COLORS } from "@constants/style";

export const outerPadding = () => css`
  padding: 1.5rem 2.5rem;
`;
export const innerPadding = () => css`
  padding: 1rem 1.5rem;
`;

export const Font = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "1.2rem";
      case "large":
        return "2rem";
      case "x-large":
        return "2.8rem";
      case "x-small":
        return "1rem";
      default:
        return "1.6rem";
    }
  }};
`;

export const HeaderOuter = styled.header`
  border-bottom: 0.1rem solid ${COLORS.BORDER};
  background-color: ${COLORS.BACKGROUND};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Main = styled.main`
  max-width: 110rem;
  margin: 0 auto;
  flex: 1;
  width: 100%;
`;

export const HeaderInner = styled.div`
  margin: 0 auto;
  ${flexLayout("space-between", "center")};
  max-width: 110rem;
  height: 9.2rem;
  ${innerPadding()};

  button {
    ${textHover()};
  }
`;

export const ErrorPageWrap = styled.div`
  ${outerPadding()};
  width: 100vw;
  height: 80vh;
  ${flexLayout("center", "center")};
  margin: 0 auto;
  align-content: center;

  button {
    cursor: pointer;
  }

  h1,
  h2 {
    text-align: center;
  }
`;

export const SelectTwoTypes = styled.li`
  background-color: ${({ $isChecked }) => $isChecked && COLORS.BORDER};
  ${flexLayout("space-between", "center")};
  ${setBorder()};
  ${outerPadding()};
  height: 6rem;
  margin-bottom: 1.5rem;
`;

export const CommonSectionWrap = styled.div`
  padding: 1rem 0;
`;

export const ErrorMsg = styled.small`
  color: red;
`;

export const ColumnFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: ${({ $height }) => $height || "auto"};
`;

export const CommonPageHeader = styled.div`
  div:first-child {
    align-items: start;
    height: 3rem;
  }

  ${flexLayout("space-between", "center")};
`;

export const CommonBorder = styled.div`
  position: relative;
  ${setBorder()};
  padding: ${({ $hasAddBtn }) => ($hasAddBtn ? "0 0 5rem 0" : "1.5rem 2.5rem")};
  margin: 1rem 0;
`;

export const CommonPageWrap = styled.ul`
  min-height: 20rem;
  max-width: 80rem;
  margin: 0 auto;
  ${outerPadding()};
`;

export const VerticalSpace = styled.div`
  height: 1rem;
  background-color: #f6f6f6;
  margin: 0 -1.5rem;
`;

export const DividingLine = styled.div`
  flex: none;
  height: 0.08rem;
  margin: 0 -1.5rem;
  background-color: ${COLORS.BORDER};
`;

export const FixedTextInterval = styled.ul`
  ${({ $hasPadding }) => $hasPadding && outerPadding()};
  min-height: 10rem;

  p:nth-child(1),
  p:nth-child(2) {
    display: inline-block;
    width: 50%;
  }
`;

export const FlexOnly = styled(({ element: Element = "div", ...props }) => <Element {...props} />)`
  display: flex;
  align-items: center;
  width: ${({ width }) => width || "auto"};
  justify-content: ${({ justify }) => justify || "flex-start"};
`;
