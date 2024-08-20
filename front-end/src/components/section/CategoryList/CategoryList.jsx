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
import {useMove} from "../../../hooks/useMove";

function CategoryList({categoryId}) {
    const navigate = useMove()
    return (
        <CategoryListOuter>
            <CategoryListInner>
                <CategoryListUl>
                    <CategoryListSearchLi key={"search"}>
                        <SearchImg src={searchImg} width={35} alt={"search_img"}/>
                    </CategoryListSearchLi>
                    {categoryDummy.map((e) =>
                        <CategoryListLi key={e.id} id={e.id} clicked={categoryId}
                                        onClick={() => navigate(`/category-info/${e.id}`, {state: {categoryId: e.id}})}>
                            {/*key 는 접근할 수 없는 속성*/}
                            <span>{e.text}</span>
                        </CategoryListLi>)}
                </CategoryListUl>
            </CategoryListInner>
        </CategoryListOuter>
    );
}

export default CategoryList;