import React from 'react';
import {CommonPageWrap} from "../../../assets/styles/CommonStyle";
import {SubBtn} from "components/common/Button/main/MainButton";
import PaymentAmount from "./components/PaymentAmount";
import {usePayment} from "../../../hooks/usePayment";
import LabeledTextInput from "components/common/Input/LabeledTextInput";
import PaymentMethods from "./components/PaymentMethods";
import Title from "components/common/Title/Title";

const paymentMethods = {
    methodsName: "paymentMethod",
    methods: [
        {
            content: "만나서 카드 결제",
            method: "card"
        },
        {
            content: "만나서 현금 결제",
            method: "cash"
        },]
}

const orderMethods = {
    methodsName: "orderType",
    methods: [
        {
            content: "포장 주문 후 픽업",
            method: "takeOut"
        },
        {
            content: "배달 주문",
            method: "delivery"
        }
    ]
}

function PaymentPage(props) {
    const {
        paymentInfo,
        isOrderPosting,
        control,
        register,
        handleSubmit
    } = usePayment();

    return (
        <CommonPageWrap>
            <Title text={"주문하기"} size={"x-large"}/>
            <PaymentMethods control={control} toSelectMethods={paymentMethods} tips={paymentInfo.tips}/>
            <PaymentMethods control={control} toSelectMethods={orderMethods} tips={paymentInfo.tips}/>
            <form onSubmit={handleSubmit}>
                <LabeledTextInput title={"배달 주소"} register={register("address")}
                                  disabled={true}/>
                <LabeledTextInput title={"상세 주소"}
                                  placeholder={"동 / 호수를 입력해주세요"}
                                  register={register("detailAddress")}/>
                <LabeledTextInput title={"주문시 요청사항"}
                                  placeholder={"사장님 / 라이더님께 요청사항을 입력해주세요"}
                                  register={register("requests")}/>
                <LabeledTextInput title={"내 연락처"} type={"tel"}
                                  placeholder={"- 를 제외한 휴대전화 번호를 입력해 주세요"}
                                  register={register("contact")}/>
                <PaymentAmount paymentInfo={paymentInfo}/>
                <SubBtn text={"결제하기"} type={"submit"} height={"50px"} isLoading={isOrderPosting}/>
            </form>
        </CommonPageWrap>
    );
}

export default PaymentPage;