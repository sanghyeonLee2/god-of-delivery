import React from "react";
import { Controller } from "react-hook-form";
import { Font } from "@assets/styles/CommonStyle";
import RadioGroup from "@components/common/RadioGroup/RadioGroup";
import { OptionWrap } from "@components/modal/MenuDetail/components/ModalComponents.styles";
import Radio from "@components/common/RadioGroup/Radio/Radio";

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
                  <Font>{option.content}</Font>
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
