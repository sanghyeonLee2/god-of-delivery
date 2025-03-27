import styled, { css } from "styled-components";
import { flexLayout, setBorder } from "./Mixin";
import { COLORS } from "./colors";

export const exampleColor = () => css`
  background-color: lightgray;
`;
export const outerPadding = () => css`
  padding: 15px 25px;
`;
export const innerPadding = () => css`
  padding: 10px 15px;
`;

export const Font = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "smaller";
      case "large":
        return "20px";
      case "x-large":
        return "28px";
      default:
        return "medium";
    }
  }};
`;

export const ErrorPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
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
  height: 60px;
  margin-bottom: 15px;
`;

export const CommonSectionWrap = styled.div`
  padding: 10px 0;
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
    height: 30px;
  }

  ${flexLayout("space-between", "center")};
`;
export const CommonBorder = styled.div`
  position: relative;
  ${setBorder()};
  padding: 15px 25px ${({ $hasAddBtn }) => ($hasAddBtn ? "55px" : "25px")} 25px;
  margin: 10px 0;
`;
export const CommonPageWrap = styled.ul`
  min-height: 200px;
  max-width: 800px;
  margin: 0 auto;
  ${outerPadding()};
`;
export const VerticalSpace = styled.div`
  height: 10px;
  background-color: #f6f6f6;
  margin: 0 -25px;
`;
export const DividingLine = styled.div`
  flex: none;
  height: 1px;
  margin: 0 -25px;
  background-color: lightgray;
`;

export const FixedTextInterval = styled.ul`
  ${({ $hasPadding }) => $hasPadding && outerPadding()}
  min-height: 100px;

  p:nth-child(1) {
    display: inline-block;
    width: 35%;
  }

  p:nth-child(2) {
    display: inline-block;
    width: 65%;
  }
`;
export const FlexOnly = styled(({ element: Element = "div", ...props }) => <Element {...props} />)`
  display: flex;
  align-items: center;
  width: ${({ width }) => width || "auto"};
  justify-content: ${({ justify }) => justify || "start"};
`;
//기본적으로 전달되는 props가 있음
