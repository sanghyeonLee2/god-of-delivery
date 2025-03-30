import React from "react";
import * as S from "pages/user/CartPage/CartLayout";
import { Font } from "../../../../assets/styles/CommonStyle";

function CartHeader({ storeName, deliveryTime }) {
  return (
    <S.CartHeaderWrap>
      <S.MinStoreInfoWrap>
        <Font size={"x-large"}>{storeName}</Font>
        <Font size={"small"} color={"gray"}>
          {deliveryTime} 후 도착예정
        </Font>
      </S.MinStoreInfoWrap>
    </S.CartHeaderWrap>
  );
}

export default CartHeader;
