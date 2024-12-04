import React from 'react';
import {Font} from "../../../../assets/styles/CommonStyle";
import {OrderPriceWrap} from "./ModalComponentsLayout";

function OrderPrice({watch, defaultPrice = 0}) {
    const orderPrice = watch("quantity") * (defaultPrice +
        Object.values(watch()).reduce((acc, option) => {
            if (option?.price) {
                acc += option.price
            }
            if (Array.isArray(option)) {
                acc += option.reduce((detailAcc, detailOption) => {
                    return detailAcc + detailOption.price
                }, 0)
            }
            return acc
        }, 0))
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