import React from "react";
import { Controller } from "react-hook-form";
import { Font } from "@assets/styles/CommonStyle";
import { handleCheckLimit, isChecked } from "@utils/clickHandler";
import { OptionWrap } from "@components/modal/MenuDetail/components/ModalComponents.styles";
import CheckBox from "@components/common/CheckBox/CheckBox";

function MenuDetailFormCheckbox({ control, category }) {
  return (
    <Controller
      control={control}
      name={`options.${category.menuCategoryId}`}
      defaultValue={[]}
      render={({ field }) => (
        <>
          {category.MenuOptions.map((option) => {
            return (
              <OptionWrap key={option.menuOptionId}>
                <CheckBox
                  value={option.menuOptionId}
                  name={category.menuCategoryId}
                  checked={isChecked(field, option.menuOptionId)}
                  onChange={(e) =>
                    handleCheckLimit(e, category.maxQuantity, option.menuOptionId, field)
                  }
                >
                  <Font>{option.content}</Font>
                </CheckBox>
                <Font>+{option.price.toLocaleString()}원</Font>
              </OptionWrap>
            );
          })}
        </>
      )}
    />
  );
}

export default MenuDetailFormCheckbox;
