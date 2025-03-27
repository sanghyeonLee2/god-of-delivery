import React from "react";
import Radio from "components/common/RadioGroup/Radio/Radio";
import { Font, SelectTwoTypes } from "../../../assets/styles/CommonStyle";
import RadioGroup from "components/common/RadioGroup/RadioGroup";
import { Controller } from "react-hook-form";

function RadioController({ name, title, control, radioFormFields, defaultValue }) {
  return (
    <div>
      <Font>{title} </Font>
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field }) => (
          <RadioGroup isOtherCheckStyle={true}>
            {radioFormFields.map(({ formValue, text, key }) => (
              <Radio
                key={key}
                value={formValue}
                checked={field.value === formValue}
                onChange={() => field.onChange(formValue)}
              >
                <SelectTwoTypes $isChecked={field.value === formValue}>
                  <Font>{text}</Font>
                </SelectTwoTypes>
              </Radio>
            ))}
          </RadioGroup>
        )}
      />
    </div>
  );
}

export default RadioController;
