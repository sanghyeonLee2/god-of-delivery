import styled from "styled-components";
import { flexLayout } from "../../../../assets/styles/Mixin";
import { innerPadding } from "../../../../assets/styles/CommonStyle";

export const SortingOuter = styled.div`
  border-bottom: #ddd 1px solid;
  height: 60px;
  z-index: 10;
  ${innerPadding()};
`;

export const SortingInner = styled.div`
  ${flexLayout("flex-start", "center")};
  flex-direction: row-reverse;
  height: 100%;
  gap: 12px;

  select {
    flex: 1;
    height: 38px;
  }

  select:nth-child(2) {
    display: none;

    @media (max-width: 880px) {
      display: inline-block;
    }
  }

  select:nth-child(1) {
    @media (min-width: 880px) {
      flex: 0.49;
    }
  }
`;
