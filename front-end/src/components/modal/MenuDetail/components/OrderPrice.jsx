import React from 'react';
import {Font} from "../../../../assets/styles/CommonStyle";
import {OrderPriceWrap} from "./ModalComponentsLayout";

function OrderPrice({watch, menuCategories, defaultPrice = 0}) {
    const orderPrice = watch("quantity") *
        menuCategories.reduce(
            (categoryPrice, {MenuOptions}) =>
                categoryPrice + MenuOptions.reduce(
                    (optionPrice, cur) =>
                        watch("options").includes(cur.menuOptionId) ? optionPrice + cur.price : optionPrice, 0),
            defaultPrice);

    return (
        <OrderPriceWrap>
            <Font>총 주문금액</Font>
            <Font color={"#116EDB"}>
                {orderPrice.toLocaleString()}원
            </Font>
        </OrderPriceWrap>
    );
}

export default OrderPrice;