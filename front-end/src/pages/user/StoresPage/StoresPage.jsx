import React from 'react';
import CategoryList from "./components/CategoryList";
import SortingSection from "./components/SortingSection";
import StoreList from "components/common/StoreList/StoreList";
import Pagination from "components/common/Pagination/Pagination";
import useGetStores from "../../../hooks/useGetStores";
import categoryDummy from "../../../assets/data/categoryDummy.json";
import HomeBoard from "components/common/HomeBoard/HomeBoard";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "components/common/Loading/Loading";

const findCategoryName = (categoryId) => {
    return categoryDummy.find((category) => category.id === categoryId).name
}

function StoresPage(props) {
    const {
        storesData,
        totalPages,
        isLoading,
        page,
        categoryId,
        setCategory,
        setPage,
        setSorting,
        sorting
    } = useGetStores(true);
    /*  if (!isLoading) {
          return <Loading/>
      }*/

    return (
        <div>
            {isLoading && <Loading/>}
            <HomeBoard/>
            <CategoryList categoryId={categoryId} setCategory={setCategory}/>
            <SortingSection category={categoryId} setCategory={setCategory} setSorting={setSorting}
                            sorting={sorting}/>
            <StoreList storesData={storesData} isDibs={false}/>
            <Pagination totalPages={totalPages} page={page}
                        setPage={setPage}/>
        </div>
    );
}

export default StoresPage;