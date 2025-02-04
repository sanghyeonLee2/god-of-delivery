import React from 'react';
import {Font} from "../../../assets/styles/CommonStyle";
import {PaymentInputTextWrap} from "../PaymentPageLayout";
import Input from "../../../components/common/Input/Input";
import {PaymentInputWrap} from "./PaymentInputLayout";

function PaymentInput({title, value, register, disabled = false}) {
    return (
        <PaymentInputWrap>
            <Font size={"large"}>{title}</Font>
            <PaymentInputTextWrap>
                <Input type={"text"} defaultValue={value} placeholder={value} register={register} disabled={disabled}/>
            </PaymentInputTextWrap>
        </PaymentInputWrap>
    );
}

export default PaymentInput;