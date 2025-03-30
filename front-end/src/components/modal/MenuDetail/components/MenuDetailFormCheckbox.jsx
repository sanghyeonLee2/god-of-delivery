import React from "react";
import { Controller } from "react-hook-form";
import { OptionWrap } from "components/modal/MenuDetail/components/ModalComponentsLayout";
import CheckBox from "components/common/CheckBox/CheckBox";
import { Font } from "../../../../assets/styles/CommonStyle";
import { handleCheckLimit, isChecked } from "../../../../utils/clickHandler";

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
                  &nbsp;&nbsp;{option.content}
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
