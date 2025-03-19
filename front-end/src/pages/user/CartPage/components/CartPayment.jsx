import React from 'react';
import {CommonBorder, FlexOnly, Font} from "../../../../assets/styles/CommonStyle";

function CartPayment({totalCartMenuPrice, tips}) {

    return (
        <>
            <Font size={"large"}>결제금액을 확인해주세요</Font>
            <CommonBorder>
                <FlexOnly justify={"space-between"}>
                    <Font>주문금액</Font>
                    <Font>{totalCartMenuPrice?.toLocaleString()}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font>배달팁</Font>
                    <Font>{tips?.toLocaleString()}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font size={"large"}>결제 예정? 금액</Font>
                    <Font size={"large"}>배달 {(totalCartMenuPrice + tips)?.toLocaleString()}원 |
                        포장 {totalCartMenuPrice?.toLocaleString()}원</Font>
                </FlexOnly>
            </CommonBorder>
        </>
    );
}

export default CartPayment;
