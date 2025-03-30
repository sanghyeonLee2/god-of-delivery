import React from "react";
import { CommonPageHeader, Font } from "../../../../assets/styles/CommonStyle";
import LabeledTextInput from "components/common/Input/LabeledTextInput";
import MenuOptions from "pages/owner/MenuManagementPages/components/MenuOptions";
import RadioController from "pages/owner/MenuManagementPages/components/RadioController";
import {
  CREATE_MENU_CATEGORY_FIELDS,
  CREATE_MENU_CATEGORY_RADIO_FIELDS,
} from "../../../../constants/formFields";
import CancelIconBtn from "components/common/Button/icon/CancelIconBtn";

function MenuCategory({ categoryIdx, control, register, removeCategory, minCategoryLength }) {
  return (
    <div>
      <CommonPageHeader>
        <Font size={"large"}>{categoryIdx + 1}번째 하위 카테고리</Font>
        {minCategoryLength > 1 && <CancelIconBtn onClick={removeCategory} />}
      </CommonPageHeader>
      <RadioController
        title={"필수 여부 체크"}
        defaultValue={true}
        control={control}
        name={`MenuCategories.${categoryIdx}.isEssential`}
        radioFormFields={CREATE_MENU_CATEGORY_RADIO_FIELDS}
      />
      {CREATE_MENU_CATEGORY_FIELDS.map((field) => (
        <LabeledTextInput
          defaultValue={field.defaultValue}
          key={field.key}
          {...register(`MenuCategories.${categoryIdx}.${field.element}`, {
            valueAsNumber: field.isNumber,
          })}
          title={field.title}
          placeholder={field.placeholder}
        />
      ))}
      <MenuOptions categoryIdx={categoryIdx} control={control} register={register} />
    </div>
  );
}

export default MenuCategory;
