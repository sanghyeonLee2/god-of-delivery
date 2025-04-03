import styled from "styled-components";
import { outerPadding } from "@assets/styles/CommonStyle";

export const CartMenusWrap = styled.div`
  > div {
    ${outerPadding()};
  }

  > div:not(:last-child) {
    border-bottom: 0.1rem solid;
  }
`;
