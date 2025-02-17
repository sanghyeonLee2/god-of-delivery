import React from 'react';
import {CommonPageHeader, CommonPageWrap, CommonSectionWrap, Font} from "../../assets/styles/CommonStyle";
import {SubBtn} from "../../components/common/Button/main/MainButton";
import PaymentAmount from "./components/PaymentAmount";
import {useLocation} from "react-router-dom";
import {usePaymentInitForm} from "../../hooks/usePaymentInitForm";
import PaymentInput from "./components/PaymentInput";
import PaymentMethods from "./components/PaymentMethods";
import {usePost} from "../../hooks/usePost";

function PaymentPage(props) {
    const location = useLocation();
    const {
        control, register, getValues, setValue, watch, handleSubmit
    } = usePaymentInitForm(location.state.orderInfo);
    const {mutate: handlePayment} = usePost("payment-post")

    return (
        <CommonPageWrap>
            <CommonPageHeader>
                <Font size={"large"}>{getValues("receiptMethod.receiptMethodType")}로 받을게요</Font>
                <Font color={"gray"}>{getValues("receiptMethod.waiting")} 후 도착예정</Font>
            </CommonPageHeader>
            <form onSubmit={handleSubmit((data) => handlePayment(data))}>
                {getValues("receiptMethod.receiptMethodType") === "배달" && <>
                    <PaymentInput title={"배달 주소"} value={getValues("address")}
                                  register={register("address")} disabled={true}/>
                    <PaymentInput title={"상세 주소"} value={getValues("detailAddress")}
                                  register={register("detailAddress")}/>
                </>}
                <PaymentInput title={"주문시 요청사항"} value={getValues("requestedTerm")}
                              register={register("requestedTerm")}/>
                <PaymentInput title={"내 연락처"} value={getValues("contact")}
                              register={register("contact")}/>
                <PaymentMethods control={control} getValues={getValues}/>
                <PaymentAmount/>
                <CommonSectionWrap>
                    <SubBtn text={"결제하기"} height={"50px"}/>
                </CommonSectionWrap>
            </form>
        </CommonPageWrap>
    );
}

export default PaymentPage;