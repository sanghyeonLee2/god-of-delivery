import React from 'react';
import {CategoryElement, CategoryListWrap} from "./CategoryListLayout";
import categoryDummy from "../../../assets/data/categoryDummy.json";
import {Font} from "../../../assets/styles/CommonStyle";
import {useNavigate} from "react-router-dom";


function CategoryList({categoryId}) {
    const navigate = useNavigate();
    return (
        <CategoryListWrap>
            {categoryDummy.map((e, idx) =>
                <CategoryElement key={e.id} id={e.id} $clicked={categoryId}
                                 onClick={() => navigate(`/category-info/${e.id}/${idx + 1}`, {state: {categoryId: e.id}})}>
                    <Font size={"small"}>{e.id}</Font>
                </CategoryElement>
            )}
        </CategoryListWrap>
    );
}

export default CategoryList;