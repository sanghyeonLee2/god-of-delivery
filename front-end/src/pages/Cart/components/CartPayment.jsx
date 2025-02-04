import React from 'react';
import {CommonBorder, FlexOnly, Font} from "../../../assets/styles/CommonStyle";

function CartPayment({getValues, watch}) {
    return (
        <>
            <Font size={"large"}>결제금액을 확인해주세요</Font>
            <CommonBorder>
                <FlexOnly justify={"space-between"}>
                    <Font>주문금액</Font>
                    <Font>{getValues("menus").reduce((acc, menu) => {
                        return acc + menu?.price * menu?.quantity
                    }, 0).toLocaleString()}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font>배달팁</Font>
                    <Font>{watch("receiptMethod.tip").toLocaleString()}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font size={"x-large"}>결제 예정 금액</Font>
                    <Font size={"x-large"}>{(getValues("menus").reduce((acc, menu) => {
                        return acc + menu?.price * menu?.quantity
                    }, 0) + getValues("receiptMethod.tip")).toLocaleString()}원</Font>
                </FlexOnly>
            </CommonBorder>
        </>
    );
}

export default CartPayment;