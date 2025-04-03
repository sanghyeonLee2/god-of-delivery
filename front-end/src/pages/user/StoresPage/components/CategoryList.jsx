import React from "react";
import { Font } from "@assets/styles/CommonStyle";
import * as S from "@pages/user/StoresPage/components/CategoryList.styles";
import { CATEGORIES } from "@constants/dummyData";

function CategoryList({ categoryId, setCategory }) {
  return (
    <S.CategoryListOuter>
      <S.CategoryListWrap>
        {CATEGORIES.map((category) => (
          <S.CategoryElement
            key={category.id}
            id={category.id}
            $clicked={categoryId}
            onClick={() => setCategory(category.id)}
          >
            <Font size={"small"}>{category.name}</Font>
          </S.CategoryElement>
        ))}
      </S.CategoryListWrap>
    </S.CategoryListOuter>
  );
}

export default CategoryList;
