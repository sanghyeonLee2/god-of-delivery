import React from 'react';
import {CommonSectionWrap, Font} from "../../../assets/styles/CommonStyle";
import {PaymentInputTextWrap} from "pages/PaymentPage/PaymentPageLayout";

function LabeledTextInput({title, value, register, type = 'text', disabled = false, placeholder}) {
    return (
        <CommonSectionWrap>
            <label>
                <Font>{title}</Font>
                <PaymentInputTextWrap>
                    <input type={type} defaultValue={value} placeholder={placeholder} {...register}
                           disabled={disabled}/>
                </PaymentInputTextWrap>
            </label>
        </CommonSectionWrap>
    );
}

export default LabeledTextInput;