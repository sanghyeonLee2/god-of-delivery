import styled from "styled-components";
import { elementSize, flexLayout } from "../../../assets/styles/Mixin";

export const PaginationWrap = styled.div`
  height: 6rem;
  align-content: center;
`;

export const PaginationInner = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  height: 4rem;
  ${flexLayout("center", "center")};

  button {
    ${elementSize("3.2rem", "3.2rem")};
    border-radius: 500px;
  }
`;
