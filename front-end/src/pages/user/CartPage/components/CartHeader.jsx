import React from "react";
import { Font } from "@assets/styles/CommonStyle";
import { COLORS } from "@constants/style";

function CartHeader({ storeName, deliveryTime }) {
  return (
    <div>
      <Font size={"x-large"}>{storeName}</Font>
      <Font size={"small"} color={COLORS.FONT.SUB}>
        {deliveryTime} 분 후 도착예정
      </Font>
    </div>
  );
}

export default CartHeader;
