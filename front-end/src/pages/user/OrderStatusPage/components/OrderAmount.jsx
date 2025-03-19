import React from 'react';
import {CommonSectionWrap, DividingLine, FlexOnly, Font} from "../../../../assets/styles/CommonStyle";

function OrderAmount({totalPrice, paymentMethod, tips}) {
    const menuPrice = (totalPrice - tips)?.toLocaleString()
    return (
        <div>
            <CommonSectionWrap>
                <FlexOnly justify={"space-between"}>
                    <Font size={"large"}>총 금액</Font>
                    <Font>{totalPrice?.toLocaleString()}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font size={"small"}>메뉴 금액</Font>
                    <Font>{menuPrice}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font size={"small"}>배달 팁</Font>
                    <Font>{tips?.toLocaleString()}원</Font>
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font size={"small"}>결제 방법</Font>
                    <Font>{paymentMethod === "Card" ? "카드" : "현금"}</Font>
                </FlexOnly>
            </CommonSectionWrap>
            <DividingLine/>
        </div>
    );
}

export default OrderAmount;