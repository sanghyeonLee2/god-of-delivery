import React from 'react';
import CategoryList from "./components/CategoryList";
import {useLocation} from "react-router-dom";
import SortingSection from "./components/SortingSection";
import StoreList from "./components/StoreList";
import {RestaurantsWrapper} from "./StoresPageLayout";

function StoresPage(props) {
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
            </RestaurantsWrapper>
        </>
    );
}

export default StoresPage;