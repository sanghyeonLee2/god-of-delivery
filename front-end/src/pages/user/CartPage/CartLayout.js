import styled from "styled-components";
import { setBorder } from "../../../assets/styles/Mixin";
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
export const MenuAddBtnWrap = styled.div`
  ${setBorder()};
  border-top: none;
  height: 50px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  text-align: center;
  align-content: center;
  margin-bottom: 20px;

  button {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
