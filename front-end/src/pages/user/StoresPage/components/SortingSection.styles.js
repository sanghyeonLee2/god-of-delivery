import styled from "styled-components";
import { flexLayout } from "@assets/styles/Mixin";
import { innerPadding } from "@assets/styles/CommonStyle";
import { COLORS } from "@constants/style";

export const SortingOuter = styled.div`
  border-bottom: ${COLORS.BORDER} 0.1rem solid;
  height: 6rem;
  z-index: 10;
  ${innerPadding()};
`;

export const SortingInner = styled.div`
  ${flexLayout("flex-start", "center")};
  flex-direction: row-reverse;
  gap: 1.2rem;

  select {
    flex: 1;
    height: 3.8rem;
  }

  select:nth-child(2) {
    display: none;

    @media (max-width: 88rem) {
      display: inline-block;
    }
  }

  select:nth-child(1) {
    @media (min-width: 88rem) {
      flex: 0.46;
    }
  }
`;
