import styled from "styled-components";
import { boxHover, flexLayout } from "@assets/styles/Mixin";
import { innerPadding } from "@assets/styles/CommonStyle";

export const StoresOuter = styled.div`
  li {
    ${boxHover()}
    width: ${({ $isDibs }) => ($isDibs ? "100%" : "49.5%")};

    @media (max-width: ${({ $isDibs }) => ($isDibs ? "0" : "48rem")}) {
      width: 100%;
    }
  }

  ${({ $isDibs }) => !$isDibs && innerPadding()}
`;

export const StoresInner = styled.ul`
  ${flexLayout("space-between")};
  flex-wrap: wrap;
`;
