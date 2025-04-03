import React from "react";
import { CommonSectionWrap, DividingLine, Font } from "@assets/styles/CommonStyle";
import { orderTotalPrice } from "@utils/calculator";
import { COLORS } from "@constants/colors";

function OrderMenusDetail({ menus }) {
  return (
    <div>
      {menus?.map((menu) => (
        <div key={menu.orderItemId}>
          <CommonSectionWrap>
            <Font>{menu?.menuNameSnapshot}</Font>
            <Font size={"small"} color={COLORS.FONT.SUB}>
              기본 : {menu?.menuPriceSnapshot.toLocaleString()}원
            </Font>
            {menu?.OrderItemOptions.map((option) => (
              <div key={option.menuOptionId}>
                <Font size={"small"} color={COLORS.FONT.SUB}>
                  {option.optionNameSnapshot} : {option.optionPriceSnapshot.toLocaleString()}원
                </Font>
              </div>
            ))}
            <Font>{orderTotalPrice(menu).toLocaleString()}원</Font>
          </CommonSectionWrap>
          <DividingLine />
        </div>
      ))}
    </div>
  );
}

export default OrderMenusDetail;
