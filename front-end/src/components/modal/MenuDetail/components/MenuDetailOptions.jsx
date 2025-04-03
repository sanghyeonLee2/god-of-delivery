import React from "react";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import { MenuDetailOptionsWrap } from "./ModalComponents.styles";
import MenuDetailFormRadioGroup from "@components/modal/MenuDetail/components/MenuDetailFormRadioGroup";
import MenuDetailFormCheckbox from "@components/modal/MenuDetail/components/MenuDetailFormCheckbox";
import { MenuDetailTextWrap } from "@components/modal/MenuDetail/MenuDetailModal.styles";

function MenuDetailOptions({ control, menuCategories }) {
  return (
    <>
      {menuCategories?.map((category) => (
        <MenuDetailOptionsWrap key={category.menuCategoryId}>
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
            <MenuDetailFormRadioGroup control={control} category={category} />
          ) : (
            <MenuDetailFormCheckbox control={control} category={category} />
          )}
        </MenuDetailOptionsWrap>
      ))}
    </>
  );
}

export default MenuDetailOptions;
