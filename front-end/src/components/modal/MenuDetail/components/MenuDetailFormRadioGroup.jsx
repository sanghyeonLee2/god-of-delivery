import React from "react";
import RadioGroup from "components/common/RadioGroup/RadioGroup";
import { Controller } from "react-hook-form";
import { OptionWrap } from "components/modal/MenuDetail/components/ModalComponentsLayout";
import Radio from "components/common/RadioGroup/Radio/Radio";
import { Font } from "../../../../assets/styles/CommonStyle";

function MenuDetailFormRadioGroup({ control, category }) {
  return (
    <RadioGroup>
      <Controller
        control={control}
        name={`options.${category.menuCategoryId}`}
        defaultValue={[]}
        render={({ field }) => (
          <>
            {category.MenuOptions.map((option) => (
              <OptionWrap key={option.menuOptionId}>
                <Radio
                  name={category.menuCategoryId}
                  value={option.menuOptionId}
                  checked={field.value?.[0] === option.menuOptionId}
                  onChange={() => field.onChange([option.menuOptionId])}
                >
                  &nbsp;&nbsp;{option.content}
                </Radio>
                <Font>+{option.price.toLocaleString()}원</Font>
              </OptionWrap>
            ))}
          </>
        )}
      />
    </RadioGroup>
  );
}

export default MenuDetailFormRadioGroup;
