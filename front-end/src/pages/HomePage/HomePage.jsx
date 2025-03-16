import React from 'react';
import * as S from "./HomePageLayout";
import categoryDummy from "../../assets/data/categoryDummy.json";
import testImg from "../../assets/img/category_text_img.png";
import {useNavigate} from "react-router-dom";
import HomeBoard from "components/common/HomeBoard/HomeBoard";

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <HomeBoard/>
            <S.CategoryWrap>
                {categoryDummy.map((category) => (
                    <S.CategoryBoxOuter
                        key={category.id}
                        onClick={() => navigate(`stores/${category.id}`)}
                    >
                        <S.CategoryBoxInner>
                            <S.CategoryText>{category.name}</S.CategoryText>
                            <S.CategoryImg src={testImg} alt="img" width={110}/>
                        </S.CategoryBoxInner>
                    </S.CategoryBoxOuter>
                ))}
            </S.CategoryWrap>
        </>
    );
}

export default HomePage;
