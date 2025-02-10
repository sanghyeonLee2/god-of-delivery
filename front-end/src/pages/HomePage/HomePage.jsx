import React from 'react';
import {CategoryBoxInner, CategoryBoxOuter, CategoryImg, CategoryText, CategoryWrap} from "./HomePageLayout";
import categoryDummy from "../../assets/data/categoryDummy.json"
import testImg from "../../assets/img/category_text_img.png"
import {useNavigate} from "react-router-dom";

function HomePage(props) {
    const navigate = useNavigate()
    return (
        <CategoryWrap>
            {categoryDummy.map((ele, idx) =>
                <CategoryBoxOuter key={ele.id}
                                  onClick={() => navigate(`category-info/${ele.id}/${idx + 1}`, {
                                      state: {
                                          categoryId: ele.id
                                      }
                                  })}>
                    <CategoryBoxInner>
                        <CategoryText>{ele.id}</CategoryText>
                        <CategoryImg src={testImg} alt={"img"} width={110}/>
                    </CategoryBoxInner>
                </CategoryBoxOuter>)}
        </CategoryWrap>
    );
}

export default HomePage;