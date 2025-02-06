import React from 'react';
import {CommonSectionWrap, Font} from "../../../assets/styles/CommonStyle";
import {PaymentInputTextWrap} from "../PaymentPageLayout";
import Input from "../../../components/common/Input/Input";

function PaymentInput({title, value, register, disabled = false}) {
    return (
        <CommonSectionWrap>
            <Font size={"large"}>{title}</Font>
            <PaymentInputTextWrap>
                <Input type={"text"} defaultValue={value} placeholder={value} register={register} disabled={disabled}/>
            </PaymentInputTextWrap>
        </CommonSectionWrap>
    );
}

export default PaymentInput;