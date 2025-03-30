import styled from "styled-components";
import { flexLayout } from "../../../../assets/styles/Mixin";
import { innerPadding } from "../../../../assets/styles/CommonStyle";

export const SortingOuter = styled.div`
  border-bottom: lightgray 1px solid;
  height: 60px;
`;

export const SortingInner = styled.div`
  ${innerPadding()};
  ${flexLayout("flex-start", "center")};
  flex-direction: row-reverse;
  margin: 0 auto;
  max-width: 1100px;
  height: 100%;
  gap: 12px;

  select {
    flex: 0.49;
    height: 38px;
  }

  select:nth-child(2) {
    display: none;
    @media (max-width: 768px) {
      display: inline-block;
    }
  }
`;
