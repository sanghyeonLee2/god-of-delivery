import React from 'react';
import CategoryList from "./components/CategoryList";
import SortingSection from "./components/SortingSection";
import StoreList from "./components/StoreList";
import Pagination from "../../components/common/Pagination/Pagination";
import Loading from "../../components/common/Loading/Loading";
import useGetStores from "../../hooks/useGetStores";

function StoresPage(props) {
    const {
        storesData,
        totalPages,
        isError,
        isLoading,
        currentPage,
        categoryId,
        setCategory,
        setCurrentPage,
        setSorting,
        sorting
    } = useGetStores("stores");
    if (isLoading)
        return <Loading/>
    return (
        <div>
            <CategoryList categoryId={categoryId} setCategory={setCategory}/>
            <SortingSection categoryId={categoryId} setCategory={setCategory} setSorting={setSorting}
                            sorting={sorting}/>
            <StoreList categoryId={categoryId} storesData={storesData}/>
            <Pagination totalPages={totalPages} currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
        </div>
    );
}

export default StoresPage;