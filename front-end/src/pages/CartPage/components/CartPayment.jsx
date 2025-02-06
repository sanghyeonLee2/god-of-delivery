import React from 'react';
import {useWatch} from "react-hook-form";
import {CommonBorder, FlexOnly, Font} from "../../../assets/styles/CommonStyle";

function CartPayment({getValues, control}) {
    const tip = useWatch({
        control,
        name: "receiptMethod.tip",
        defaultValue: 0,
    });

    if (!getValues("receiptMethod")) {
        return; // 데이터가 설정되기 전에는 렌더링하지 않음
    }

    return (
        <>
            <Font size={"large"}>결제금액을 확인해주세요</Font>
            <CommonBorder>
                <FlexOnly justify={"space-between"}>
                    <Font>주문금액</Font>
                    <Font>{getValues("menus")?.reduce((acc, menu) => {
                        return acc + (menu?.price ?? 0) * (menu?.quantity ?? 0);
                    }, 0).toLocaleString()}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font>배달팁</Font>
                    <Font>{tip.toLocaleString()}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font size={"x-large"}>결제 예정 금액</Font>
                    <Font size={"x-large"}>{(getValues("menus")?.reduce((acc, menu) => {
                        return acc + (menu?.price ?? 0) * (menu?.quantity ?? 0);
                    }, 0) + tip).toLocaleString()}원</Font>
                </FlexOnly>
            </CommonBorder>
        </>
    );
}

export default CartPayment;
