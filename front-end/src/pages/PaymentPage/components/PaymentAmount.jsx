import React from 'react';
import {CommonBorder, FlexOnly, Font} from "../../../assets/styles/CommonStyle";

function PaymentAmount(props) {
    return (
        <CommonBorder>
            <FlexOnly justify={"space-between"}>
                <Font size={"large"}>결제 금액</Font>
                <Font size={"large"}>20400원</Font>
            </FlexOnly>
            <FlexOnly justify={"space-between"}>
                <Font size={"x-small"}>총 금액</Font>
                <Font size={"small"}>20000원</Font>
            </FlexOnly>
            <FlexOnly justify={"space-between"}>
                <Font size={"small"}>메뉴 금액</Font>
                <Font size={"small"}>18000원</Font>
            </FlexOnly>
            <FlexOnly justify={"space-between"}>
                <Font size={"small"}>배달 팁</Font>
                <Font size={"small"}>2000원</Font>
            </FlexOnly>
        </CommonBorder>
    );
}

export default PaymentAmount;