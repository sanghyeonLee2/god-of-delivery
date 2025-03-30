import React, { forwardRef } from "react";
import { CommonSectionWrap, Font } from "../../../assets/styles/CommonStyle";
import { PaymentInputTextWrap } from "pages/user/PaymentPage/PaymentPageLayout";

const LabeledTextInput = forwardRef(function LabeledTextInput({ title, ...rest }, ref) {
  return (
    <CommonSectionWrap>
      <label>
        <Font>{title}</Font>
        <PaymentInputTextWrap>
          <input ref={ref} {...rest} />
        </PaymentInputTextWrap>
      </label>
    </CommonSectionWrap>
  );
});

export default LabeledTextInput;
