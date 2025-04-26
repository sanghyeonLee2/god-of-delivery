import React from "react";
import CategoryList from "./components/CategoryList";
import SortingSection from "./components/SortingSection";
import StoreList from "@components/common/StoreList/StoreList";
import Pagination from "@components/common/Pagination/Pagination";
import useGetStores from "./hooks/useGetStores";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@components/common/Loading/Loading";
import Empty from "@components/common/Empty/Empty";
import { StoresSticky } from "@pages/user/StoresPage/StoresPage.styles";
import HomeBoard from "@components/common/HomeBoard/HomeBoard";

function StoresPage() {
  const {
    storesData,
    totalPages,
    isLoading,
    page,
    categoryId,
    setCategory,
    setPage,
    setSorting,
    sorting,
  } = useGetStores(true);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <HomeBoard />
      <StoresSticky>
        <CategoryList categoryId={categoryId} setCategory={setCategory} />
        <SortingSection
          category={categoryId}
          setCategory={setCategory}
          setSorting={setSorting}
          sorting={sorting}
        />
      </StoresSticky>
      {storesData.length > 0 ? (
        <StoreList storesData={storesData} isDibs={false} />
      ) : (
        <Empty text="가게가 없습니다" />
      )}
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}

export default StoresPage;
