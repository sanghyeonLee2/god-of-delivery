import React from "react";
import { CommonBorder, CommonPageHeader, Font } from "@assets/styles/CommonStyle";
import LabeledTextInput from "@components/common/Input/LabeledTextInput";
import { AddBtn } from "@components/common/Button/main/MainButtons";
import { useFieldArray } from "react-hook-form";
import { CREATE_MENU_OPTION_FIELDS } from "@constants/formFields";
import CancelIconBtn from "@components/common/Button/icon/CancelIconBtn";

function MenuOptions({ categoryIdx, control, register }) {
  const {
    fields: optionFields,
    append: appendOption,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: `MenuCategories.${categoryIdx}.MenuOptions`,
  });
  return (
    <CommonBorder $hasAddBtn={true} style={{ padding: "1.5rem 2.5rem 6.5rem 2.5rem" }}>
      <Font size={"large"}>메뉴 옵션 선택</Font>
      {optionFields.map((field, optionIdx) => (
        <div key={field.id}>
          <CommonPageHeader>
            <Font>
              {categoryIdx + 1}번째 하위 카테고리의 {optionIdx + 1}번째 옵션
            </Font>
            {optionFields.length > 1 && (
              <CancelIconBtn
                right={"2.5rem"}
                type={"button"}
                onClick={() => removeOption(optionIdx)}
              />
            )}
          </CommonPageHeader>
          {CREATE_MENU_OPTION_FIELDS.map((field) => (
            <LabeledTextInput
              key={field.key}
              title={field.title}
              type={field.type}
              {...register(
                `MenuCategories.${categoryIdx}.MenuOptions.${optionIdx}.${field.element}`,
                { valueAsNumber: field.isNumber }
              )}
              placeholder={field.placeholder}
            />
          ))}
        </div>
      ))}
      <AddBtn
        text={"메뉴 옵션 추가"}
        type={"button"}
        onClick={() => appendOption({ content: "", price: 0 })}
      />
    </CommonBorder>
  );
}

export default MenuOptions;
