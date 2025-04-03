import React from "react";
import * as S from "./HomePage.styles";
import { useNavigate } from "react-router-dom";
import { categoryObj } from "@assets/data/categoryObj";
import { Font } from "@assets/styles/CommonStyle";
import HomeBoard from "@components/common/HomeBoard/HomeBoard";
import Image from "@components/common/Image/Image";
import { COLORS } from "@assets/data/colors";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <HomeBoard />
      <S.CategoryWrap>
        {categoryObj.map((category) => (
          <S.CategoryBoxWrap key={category.id} onClick={() => navigate(`stores/${category.id}`)}>
            <Font>{category.name}</Font>
            <Image width={"5.5rem"} height={"5.5rem"} src={category.url} alt={category.alt} />
          </S.CategoryBoxWrap>
        ))}
        <Font size={"x-small"} color={COLORS.FONT.SUB}>
          Icons by{" "}
          <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
            Icons8
          </a>
        </Font>
      </S.CategoryWrap>
    </>
  );
}

export default HomePage;
