import React from "react";
import { CommonSectionWrap, DividingLine, Font } from "../../../../assets/styles/CommonStyle";
import { orderTotalPrice } from "../../../../utils/calculator";

function OrderMenusDetail({ menus }) {
  return (
    <div>
      {menus?.map((menu) => (
        <div key={menu.orderItemId}>
          <CommonSectionWrap>
            <Font>{menu?.menuNameSnapshot}</Font>
            <Font size={"small"} color={"gray"}>
              기본 : {menu?.menuPriceSnapshot.toLocaleString()}원
            </Font>
            {menu?.OrderItemOptions.map((option) => (
              <div key={option.menuOptionId}>
                <Font size={"small"} color={"gray"}>
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
