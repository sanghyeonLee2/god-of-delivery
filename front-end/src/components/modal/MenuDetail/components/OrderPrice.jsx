import React from 'react';
import {Font} from "../../../../assets/styles/CommonStyle";
import {OrderPriceWrap} from "./ModalComponentsLayout";

function OrderPrice({price}) {
    return (
        <OrderPriceWrap>
            <Font>총 주문금액</Font>
            <Font color={"#116EDB"}>
                {price.toLocaleString()}원
            </Font>
        </OrderPriceWrap>
    );
}

export default OrderPrice;