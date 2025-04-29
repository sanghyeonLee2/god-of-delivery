import React, { forwardRef, memo } from "react";
import { CommonSectionWrap, Font } from "@assets/styles/CommonStyle";
import { LabeledTextInputTextWrap } from "@components/common/Input/LabeledTextInput.styles";

const LabeledTextInput = memo(
  forwardRef(function LabeledTextInput({ title, defaultValue, ...rest }, ref) {
    return (
      <CommonSectionWrap>
        <label>
          <Font>{title}</Font>
          <LabeledTextInputTextWrap>
            <input ref={ref} defaultValue={defaultValue} {...rest} />
          </LabeledTextInputTextWrap>
        </label>
      </CommonSectionWrap>
    );
  })
);

export default LabeledTextInput;
