import React from 'react';
import {CategoryBox, CategoryImg, CategoryInner, CategoryOuter, CategoryText} from "./HomePageLayout";
import categoryDummy from "../../assets/data/categoryDummy.json"
import testImg from "../../assets/img/category_text_img.png"
import {useMove} from "../../hooks/useMove";

function HomePage(props) {
    const navigate = useMove()
    return (
        <CategoryOuter>
            <CategoryInner>
                {categoryDummy.map((ele) =>
                    <CategoryBox key={ele.id}
                                 onClick={() => navigate(`category-info/${ele.id}`, {state: {categoryId: ele.id}})}>
                        <CategoryText>{ele.text}</CategoryText>
                        <CategoryImg src={testImg} alt={"img"} width={160}/>
                    </CategoryBox>)}
            </CategoryInner>
        </CategoryOuter>
    );
}

export default HomePage;