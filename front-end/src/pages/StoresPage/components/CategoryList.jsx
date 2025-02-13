import React from 'react';
import {CategoryElement, CategoryListWrap} from "./CategoryListLayout";
import categoryDummy from "../../../assets/data/categoryDummy.json";
import {Font} from "../../../assets/styles/CommonStyle";


function CategoryList({categoryId, setCategory}) {
    return (
        <CategoryListWrap>
            {categoryDummy.map((category) =>
                <CategoryElement key={category.id} id={category.id} $clicked={categoryId}
                                 onClick={() => setCategory(category.id)}>
                    <Font size={"small"}>{category.name}</Font>
                </CategoryElement>
            )}
        </CategoryListWrap>
    );
}

export default CategoryList;