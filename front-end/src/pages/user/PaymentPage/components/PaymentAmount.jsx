import React from "react";
import { CommonBorder, FlexOnly, Font } from "@assets/styles/CommonStyle";
import usePaymentInfo from "@pages/user/PaymentPage/hooks/usePaymentInfo";

function PaymentAmount({ paymentInfo }) {
  const paymentTip = usePaymentInfo(paymentInfo.tips);

  return (
    <CommonBorder>
      <FlexOnly justify={"space-between"}>
        <Font size={"large"}>결제 금액</Font>
        <Font size={"large"}>
          {(paymentInfo.cartMenuTotalPrice + paymentTip)?.toLocaleString()}원
        </Font>
      </FlexOnly>
      <FlexOnly justify={"space-between"}>
        <Font size={"small"}>메뉴 금액</Font>
        <Font size={"small"}>{paymentInfo.cartMenuTotalPrice.toLocaleString()}원</Font>
      </FlexOnly>
      <FlexOnly justify={"space-between"}>
        <Font size={"small"}>배달 팁</Font>
        <Font size={"small"}>{paymentTip?.toLocaleString()}원</Font>
      </FlexOnly>
    </CommonBorder>
  );
}

export default PaymentAmount;
