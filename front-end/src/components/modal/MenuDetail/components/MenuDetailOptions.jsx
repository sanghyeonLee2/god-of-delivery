import React from "react";
import { Controller } from "react-hook-form";
import { FlexOnly, Font } from "../../../../assets/styles/CommonStyle";
import { MenuDetailOptionsWrap, OptionWrap } from "./ModalComponentsLayout";
import { MenuDetailTextWrap } from "../MenuDetailModalLayout";
import Radio from "../../../common/RadioGroup/Radio/Radio";
import RadioGroup from "../../../common/RadioGroup/RadioGroup";
import CheckBox from "../../../common/CheckBox/CheckBox";

function MenuDetailOptions({ control, menuCategories, setValue }) {
  return (
    <>
      {menuCategories?.map((category) => {
        const categoryId = category.menuCategoryId;

        return (
          <MenuDetailOptionsWrap key={categoryId}>
            <MenuDetailTextWrap>
              <FlexOnly>
                <Font>{category.title}</Font>
                &nbsp;&nbsp;
                {category?.isEssential ? (
                  <Font size="small" color="red">
                    {category?.maxQuantity}개 필수 선택
                  </Font>
                ) : (
                  <Font size="small">최대{category?.maxQuantity}개 선택가능</Font>
                )}
              </FlexOnly>
            </MenuDetailTextWrap>

            {category?.isEssential && category?.maxQuantity === 1 ? (
              <RadioGroup>
                <Controller
                  control={control}
                  name={`options.${categoryId}`}
                  defaultValue={[]}
                  render={({ field }) => (
                    <>
                      {category.MenuOptions.map((option) => (
                        <OptionWrap key={option.menuOptionId}>
                          <Radio
                            name={categoryId}
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
            ) : (
              <Controller
                control={control}
                name={`options.${categoryId}`}
                defaultValue={[]}
                render={({ field }) => (
                  <>
                    {category.MenuOptions.map((option) => {
                      const isChecked = field.value.includes(option.menuOptionId);
                      const checkedCnt = field.value.length;

                      const handleChange = (e) => {
                        if (e.target.checked && checkedCnt >= category.maxQuantity) {
                          e.preventDefault();
                          return;
                        }

                        const updated = e.target.checked
                          ? [...field.value, option.menuOptionId]
                          : field.value.filter((id) => id !== option.menuOptionId);

                        field.onChange(updated);
                      };

                      return (
                        <OptionWrap key={option.menuOptionId}>
                          <CheckBox
                            value={option.menuOptionId}
                            name={categoryId}
                            checked={isChecked}
                            onChange={handleChange}
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
            )}
          </MenuDetailOptionsWrap>
        );
      })}
    </>
  );
}

export default MenuDetailOptions;
