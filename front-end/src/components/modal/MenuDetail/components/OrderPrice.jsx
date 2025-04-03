import React from "react";
import { useWatch } from "react-hook-form";
import { Font } from "@assets/styles/CommonStyle";
import { OrderPriceWrap } from "./ModalComponents.styles";
import { menuDetailTotalPrice } from "@utils/calculator";
import { extractSelectedOptionIds } from "@utils/transducer";

function OrderPrice({ control, menuCategories, defaultPrice = 0 }) {
  const { quantity = 1, options = {} } = useWatch({ control });
  const selectedOptionIds = extractSelectedOptionIds(options);

  const orderPrice = menuDetailTotalPrice({
    quantity,
    defaultPrice,
    menuCategories,
    selectedOptionIds,
  });

  return (
    <OrderPriceWrap>
      <Font>총 주문금액</Font>
      <Font color="#116EDB">{orderPrice.toLocaleString()}원</Font>
    </OrderPriceWrap>
  );
}

export default OrderPrice;
