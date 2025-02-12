import React from 'react';
import CategoryList from "./components/CategoryList";
import {useLocation} from "react-router-dom";
import SortingSection from "./components/SortingSection";
import StoreList from "./components/StoreList";
import Pagination from "../../components/common/Pagination/Pagination";
import Loading from "../../components/common/Loading/Loading";
import useGetStores from "../../hooks/useGetStores";

function StoresPage(props) {
    const {
        state: {
            categoryId
        }
    } = useLocation()

    const {
        storesData,
        totalPages,
        isError,
        status,
        isLoading,
        currentPage,
        setCurrentPage
    } = useGetStores(`stores/${categoryId}`);
    if (isLoading)
        return <Loading/>
    return (
        <div>
            <CategoryList categoryId={categoryId}/>
            <SortingSection categoryId={categoryId}/>
            <StoreList categoryId={categoryId} storesData={storesData}/>
            <Pagination totalPages={totalPages} currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
        </div>
    );
}

export default StoresPage;