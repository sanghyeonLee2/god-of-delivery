import React from "react";
import * as S from "./SortingSection.styles";
import Select from "@components/common/Select/Select";
import Option from "@components/common/Select/components/Option";
import { CATEGORIES, STORE_SORTING } from "@constants/dummyData";

function SortingSection({ categoryId, setCategory, setSorting, sorting }) {
  return (
    <S.SortingOuter>
      <S.SortingInner>
        <Select defaultValue={sorting} onChange={(e) => setSorting(e.target.value)}>
          {STORE_SORTING.map((e) => (
            <Option key={e.id} text={e.id} value={e.value} />
          ))}
        </Select>
        <Select defaultValue={categoryId} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((category) => (
            <Option key={category.id} text={category.name} value={category.id} />
          ))}
        </Select>
      </S.SortingInner>
    </S.SortingOuter>
  );
}

export default SortingSection;
