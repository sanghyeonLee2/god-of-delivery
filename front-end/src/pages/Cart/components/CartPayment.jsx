import React from 'react';
import {Font} from "../../../assets/styles/CommonStyle";
import {PaymentBox, PriceWrap} from "./CartPaymentLayout";

function CartPayment({form}) {
    return (
        <>
            <Font size={"large"}>결제금액을 확인해주세요</Font>
            <PaymentBox>
                <PriceWrap>
                    <Font>주문금액</Font>
                    <Font>{form?.getValues("menus").reduce((acc, menu) => {
                        return acc + menu?.price * menu?.quantity
                    }, 0).toLocaleString()}원</Font>
                </PriceWrap>
                <PriceWrap>
                    <Font>배달팁</Font>
                    <Font>{form?.getValues("tip").toLocaleString()}원</Font>
                </PriceWrap>
                <PriceWrap>
                    <Font size={"x-large"}>결제 예정 금액</Font>
                    <Font size={"x-large"}>{(form?.getValues("menus").reduce((acc, menu) => {
                        return acc + menu?.price * menu?.quantity
                    }, 0) + form?.getValues("tip")).toLocaleString()}원</Font>
                </PriceWrap>
            </PaymentBox>
        </>
    );
}

export default CartPayment;