import React from "react";
import * as S from "./HomePageLayout";
import { useNavigate } from "react-router-dom";
import HomeBoard from "components/common/HomeBoard/HomeBoard";
import { categoryObj } from "../../../assets/data/categoryObj";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HomeBoard />
      <S.CategoryWrap>
        {categoryObj.map((category) => (
          <S.CategoryBoxOuter key={category.id} onClick={() => navigate(`stores/${category.id}`)}>
            <S.CategoryBoxInner>
              <S.CategoryText>{category.name}</S.CategoryText>
              <category.icon size={90} />
            </S.CategoryBoxInner>
          </S.CategoryBoxOuter>
        ))}
      </S.CategoryWrap>
    </>
  );
}

export default HomePage;
