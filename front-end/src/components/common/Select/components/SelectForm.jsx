import React, { forwardRef } from "react";
import { Font } from "../../../../assets/styles/CommonStyle";
import { SelectWrap } from "components/common/Select/components/SelectForm.styles";

const SelectForm = forwardRef(function SelectForm({ title, formFields, ...rest }, ref) {
  return (
    <div>
      <Font>{title}</Font>
      <SelectWrap ref={ref} {...rest}>
        {formFields.map((field) => (
          <option key={field.key} value={field.value}>
            {field.text}
          </option>
        ))}
      </SelectWrap>
    </div>
  );
});

export default SelectForm;
