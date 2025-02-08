import React from 'react';
import CategoryList from "./components/CategoryList";
import {useLocation} from "react-router-dom";
import SortingSection from "./components/SortingSection";
import StoreList from "./components/StoreList";
import {RestaurantsWrapper} from "./StoresPageLayout";
import Pagination from "../../components/common/Pagination/Pagination";

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
            <Pagination/>
        </>
    );
}

export default StoresPage;