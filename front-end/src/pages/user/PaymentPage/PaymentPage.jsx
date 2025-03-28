import React from "react";
import { CommonPageWrap } from "../../../assets/styles/CommonStyle";
import { SubBtn } from "components/common/Button/main/MainButton";
import PaymentAmount from "./components/PaymentAmount";
import { usePayment } from "./hooks/usePayment";
import LabeledTextInput from "components/common/Input/LabeledTextInput";
import PaymentMethods from "./components/PaymentMethods";
import Title from "components/common/Title/Title";
import { ORDER_METHODS, PAYMENT_METHODS } from "../../../constants/formFields";

function PaymentPage(props) {
  const { paymentInfo, isOrderPosting, control, register, handleSubmit } = usePayment();

  return (
    <CommonPageWrap>
      <Title text={"주문하기"} size={"x-large"} />
      <PaymentMethods control={control} toSelectMethods={PAYMENT_METHODS} tips={paymentInfo.tips} />
      <PaymentMethods control={control} toSelectMethods={ORDER_METHODS} tips={paymentInfo.tips} />
      <form onSubmit={handleSubmit}>
        <LabeledTextInput title={"배달 주소"} {...register("address")} disabled={true} />
        <LabeledTextInput
          title={"상세 주소"}
          placeholder={"동 / 호수를 입력해주세요"}
          {...register("detailAddress")}
        />
        <LabeledTextInput
          title={"주문시 요청사항"}
          placeholder={"사장님 / 라이더님께 요청사항을 입력해주세요"}
          {...register("requests")}
        />
        <LabeledTextInput
          title={"내 연락처"}
          type={"tel"}
          placeholder={"- 를 제외한 휴대전화 번호를 입력해 주세요"}
          {...register("contact")}
        />
        <PaymentAmount paymentInfo={paymentInfo} />
        <SubBtn text={"결제하기"} type={"submit"} height={"50px"} isLoading={isOrderPosting} />
      </form>
    </CommonPageWrap>
  );
}

export default PaymentPage;
