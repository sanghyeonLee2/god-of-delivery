import styled from "styled-components";
import { outerPadding } from "../../../assets/styles/CommonStyle";

export const CartHeaderWrap = styled.div`
  min-height: 95px;
`;

export const MinStoreInfoWrap = styled.div`
  height: 60px;
`;
export const CartMenusWrap = styled.div`
  > div {
    ${outerPadding()};
  }

  > div:not(:last-child) {
    border-bottom: 1px solid;
  }
`;
