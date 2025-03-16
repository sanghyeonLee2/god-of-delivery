import React from 'react';
import {CommonBorder, FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import {useRecoilValue} from "recoil";
import {paymentTipState} from "../../../recoil/order/atom";

function PaymentAmount({paymentInfo}) {
    const paymentTip = useRecoilValue(paymentTipState)
    return (
        <CommonBorder>
            <FlexOnly justify={"space-between"}>
                <Font size={"large"}>결제 금액</Font>
                <Font size={"large"}>{(paymentInfo.totalCartMenuPrice + paymentTip).toLocaleString()}원</Font>
            </FlexOnly>
            <FlexOnly justify={"space-between"}>
                <Font size={"small"}>메뉴 금액</Font>
                <Font size={"small"}>{paymentInfo.totalCartMenuPrice.toLocaleString()}원</Font>
            </FlexOnly>
            <FlexOnly justify={"space-between"}>
                <Font size={"small"}>배달 팁</Font>
                <Font size={"small"}>{paymentTip.toLocaleString()}원</Font>
            </FlexOnly>
        </CommonBorder>
    );
}

export default PaymentAmount;