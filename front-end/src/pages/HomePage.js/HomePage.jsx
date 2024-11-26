import React from 'react';
import {CategoryBoxInner, CategoryBoxOuter, CategoryImg, CategoryText, CategoryWrap} from "./HomePageLayout";
import categoryDummy from "../../assets/data/categoryDummy.json"
import testImg from "../../assets/img/category_text_img.png"
import {useMove} from "../../hooks/useMove";

function HomePage(props) {
    const navigate = useMove()
    return (
        <CategoryWrap>
            {categoryDummy.map((ele) =>
                <CategoryBoxOuter key={ele.id}
                                  onClick={() => navigate(`category-info/${ele.id}`, {state: {categoryId: ele.id}})}>
                    <CategoryBoxInner>
                        <CategoryText>{ele.id}</CategoryText>
                        <CategoryImg src={testImg} alt={"img"} width={110}/>
                    </CategoryBoxInner>
                </CategoryBoxOuter>)}
        </CategoryWrap>
    );
}

export default HomePage;