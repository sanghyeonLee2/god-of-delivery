import React from 'react';
import {Font} from "../../../../assets/styles/CommonStyle";
import {OrderPriceWrap} from "./ModalComponentsLayout";

function OrderPrice({watch, defaultPrice = 0}) {
    const orderPrice = watch("quantity") * (
        defaultPrice +
        Object.values(watch())
            .filter((option) => Array.isArray(option) && option.length >= 1)
            .flat()
            .reduce((acc, option) => acc + (option.price || 0), 0)
    );
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