import React from 'react';
import CategoryList from "../../components/section/CategoryList/CategoryList";
import {useLocation} from "react-router-dom";
import SortingSection from "../../components/section/SortingSection/SortingSection";
import StoreList from "../../components/section/StoreList/StoreList";
import {RestaurantsWrapper} from "./CategoryInfoLayout";

function CategoryInfo(props) {
    const {
        state: {
            categoryId
        }
    } = useLocation()
    return (
        <>
            <CategoryList categoryId={categoryId}/>
            <SortingSection/>
            <RestaurantsWrapper>
                <StoreList listType={"추천 맛집"} categoryId={categoryId}/>
                {/*<StoreList listType={"등록 음식점"} categoryId={categoryId}/>*/}
            </RestaurantsWrapper>
        </>
    );
}

export default CategoryInfo;