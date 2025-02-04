import React from 'react';
import {PaymentContent, PaymentHeader} from "./PaymentPageLayout";
import {CommonPageWrap, Font} from "../../assets/styles/CommonStyle";
import {SubBtn} from "../../components/common/Button/main/MainButton";
import PaymentAmount from "./components/PaymentAmount";
import {useLocation} from "react-router-dom";
import usePaymentAndInitForm from "../../hooks/usePaymenyAndInitForm";
import PaymentInput from "./components/PaymentInput";
import Loading from "../../components/common/Loading/Loading";
import PaymentMethods from "./components/PaymentMethods";
import {usePost} from "../../hooks/usePost";

function PaymentPage(props) {
    const location = useLocation();
    const {query, form} = usePaymentAndInitForm("payment-setting", location.state.orderInfo);
    const {mutate: handlePayment} = usePost("payment-post")
    if (query.isLoading) {
        return <Loading/>;
    }
    return (
        <CommonPageWrap>
            <form onSubmit={form.handleSubmit((data) => handlePayment(data))}>
                <PaymentContent>
                    <PaymentHeader>
                        <Font size={"large"}>{form.getValues("receiptMethod.receiptMethodType")}로 받을게요</Font>
                        <Font color={"gray"}>{form.getValues("receiptMethod.waiting")} 후 도착예정</Font>
                    </PaymentHeader>
                    {form.getValues("receiptMethod.receiptMethodType") === "배달" && <>
                        <PaymentInput title={"배달 주소"} value={form.getValues("currentAddress")}
                                      register={form.register("currentAddress")} disabled={true}
                        />
                        <PaymentInput title={"상세 주소"} value={form.getValues("detailAddress")}
                                      register={form.register("detailAddress")}
                        />
                    </>}
                    <PaymentInput title={"주문시 요청사항"} value={form.getValues("requestedTerm")}
                                  register={form.register("requestedTerm")}
                    />
                    <PaymentInput title={"내 연락처"} value={form.getValues("contact")}
                                  register={form.register("contact")}
                    />
                    {/*<SelectCard control={form.control} cards={query.data.cards}/>*/}
                    <PaymentMethods control={form.control} cards={query.data.cards} getValues={form.getValues}/>
                    <PaymentAmount/>
                </PaymentContent>
                <SubBtn text={"결제하기"} height={"50px"}/>
            </form>
        </CommonPageWrap>
    )
        ;
}

export default PaymentPage;