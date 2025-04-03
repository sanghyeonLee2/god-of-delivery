import React from "react";
import categoryDummy from "@assets/data/categoryDummy.json";
import { Font } from "@assets/styles/CommonStyle";
import * as S from "@pages/user/StoresPage/components/CategoryList.styles";

function CategoryList({ categoryId, setCategory }) {
  return (
    <S.CategoryListWrap>
      {categoryDummy.map((category) => (
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
  );
}

export default CategoryList;
