import React from 'react';
import {
    CategoryListInner,
    CategoryListLi,
    CategoryListOuter,
    CategoryListSearchLi,
    CategoryListUl,
    SearchImg
} from "./CategoryListLayout";
import categoryDummy from "../../../assets/data/categoryDummy.json";
import searchImg from "../../../assets/img/search.png"

function CategoryList() {
    return (
        <CategoryListOuter>
            <CategoryListInner>
                <CategoryListUl>
                    <CategoryListSearchLi key={"search"}>
                        <SearchImg src={searchImg} width={35} alt={"search_img"}/>
                    </CategoryListSearchLi>
                    {categoryDummy.map((e) =>
                        <CategoryListLi key={e.id}>
                            <span>{e.text}</span>
                        </CategoryListLi>)}
                </CategoryListUl>
            </CategoryListInner>
        </CategoryListOuter>
    );
}

export default CategoryList;