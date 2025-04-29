import React from "react";
import { CREATE_MENU_FIELDS } from "@constants/formFields";
import LabeledTextInput from "@components/common/Input/LabeledTextInput";
import { CommonBorder } from "@assets/styles/CommonStyle";
import MenuCategory from "@pages/owner/MenuManagementPages/components/MenuCategory";
import { AddBtn, SubBtn } from "@components/common/Button/main/MainButtons";

function MenuForm({ form, onSubmit, isLoading, submitText = "저장하기" }) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {CREATE_MENU_FIELDS.map((field) => (
        <LabeledTextInput
          key={field.key}
          type={field.type}
          title={field.title}
          {...form.register(field.name, { valueAsNumber: field.isNumber })}
          placeholder={field.placeholder}
        />
      ))}
      <CommonBorder $hasAddBtn={true} style={{ padding: "1.5rem 2.5rem 6.5rem 2.5rem" }}>
        {form.categoryFields.map((field, categoryIdx) => (
          <MenuCategory
            minCategoryLength={form.categoryFields.length}
            key={field.id}
            categoryIdx={categoryIdx}
            control={form.control}
            register={form.register}
            removeCategory={() => form.removeCategory(categoryIdx)}
          />
        ))}
        <AddBtn text={"메뉴 카테고리 추가"} type={"button"} onClick={form.appendCategory} />
      </CommonBorder>
      <SubBtn text={submitText} type={"submit"} isLoading={isLoading} />
    </form>
  );
}

export default MenuForm;
