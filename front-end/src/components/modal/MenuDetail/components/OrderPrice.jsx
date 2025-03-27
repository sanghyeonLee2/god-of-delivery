import React from "react";
import { useWatch } from "react-hook-form";
import { Font } from "../../../../assets/styles/CommonStyle";
import { OrderPriceWrap } from "./ModalComponentsLayout";

function OrderPrice({ control, menuCategories, defaultPrice = 0 }) {
  const { quantity = 1, options = {} } = useWatch({ control });
  // 선택된 옵션 ID들 모두 펼치기
  const selectedOptionIds = Object.values(options).flat();

  const optionsTotalPrice = menuCategories.reduce((total, { MenuOptions }) => {
    return (
      total +
      MenuOptions.reduce((sum, option) => {
        return selectedOptionIds.includes(option.menuOptionId) ? sum + option.price : sum;
      }, 0)
    );
  }, 0);

  const orderPrice = quantity * (defaultPrice + optionsTotalPrice);

  return (
    <OrderPriceWrap>
      <Font>총 주문금액</Font>
      <Font color="#116EDB">{orderPrice.toLocaleString()}원</Font>
    </OrderPriceWrap>
  );
}

export default OrderPrice;
