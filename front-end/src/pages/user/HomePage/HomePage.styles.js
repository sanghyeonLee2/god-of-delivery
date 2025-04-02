import styled from "styled-components";
import { boxHover } from "../../../assets/styles/Mixin";
import { innerPadding } from "../../../assets/styles/CommonStyle";

export const CategoryWrap = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  ${innerPadding()};

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CategoryBoxWrap = styled.li`
  ${innerPadding()};
  position: relative;
  ${boxHover()};
  cursor: pointer;
  box-sizing: border-box;
  border: lightgray 1px solid;
  min-height: 18rem;

  svg {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;
