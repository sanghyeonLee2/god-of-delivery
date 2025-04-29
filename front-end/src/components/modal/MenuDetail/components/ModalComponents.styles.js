import styled from "styled-components";
import { innerPadding } from "@assets/styles/CommonStyle";
import { flexLayout } from "@assets/styles/Mixin";

export const ModalHeaderWrap = styled.div`
  position: relative;
  height: 6rem;
  padding-top: 1.4rem;
  text-align: center;
`;
export const MenuDetailPrologWrap = styled.div`
  min-height: 30rem;

  img {
    border-radius: 0;
  }
`;
export const MenuDetailOptionsWrap = styled.div`
  label {
    display: block;
  }
`;
export const OptionWrap = styled.div`
  label {
    ${flexLayout("space-between", "center")};
  }

  input {
    margin-right: 1rem;
  }

  height: 4.5rem;
  ${innerPadding()};
  ${flexLayout("space-between", "center")};
`;
export const OrderPriceWrap = styled.div`
  background-color: lightgray;
  ${innerPadding()};
  ${flexLayout("space-between")};
  height: 5.5rem;
`;
