import styled from "styled-components";
import { elementSize, flexLayout } from "../../../assets/styles/Mixin";
import { innerPadding } from "../../../assets/styles/CommonStyle";

export const HomeBoardOuter = styled.div`
  height: 190px;
  padding-bottom: 2px;
`;

export const HomeBoardInner = styled.div`
  ${innerPadding()};
  margin: 0 auto;
  max-width: 500px;
  height: 100%;
  flex-direction: column;
  ${flexLayout("center", "center")};
`;
export const FullWidthLine = styled.hr`
  ${elementSize("100vw", "1px")}
  background-color: #ddd;
  border: none;
  margin: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const HomeBoardLocation = styled.h1`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const TitleFont = styled.h1`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const KeywordLine = styled.div`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

export const KeywordWrap = styled.div`
  position: relative;
  height: 2.5rem;
  overflow: hidden;
`;

export const KeywordSlider = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  transform: translateY(${({ $index }) => -($index * 2.5)}rem);
  transition: ${({ $animate }) => ($animate ? "transform 0.5s ease-in-out" : "none")};
`;

export const KeywordItem = styled.li`
  color: ${({ $color }) => $color};
  height: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
