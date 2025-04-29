import React from "react";
import { CommonPageWrap } from "@assets/styles/CommonStyle";
import Title from "@components/common/Title/Title";
import useGetDibs from "./hooks/useGetDibs";
import Loading from "@components/common/Loading/Loading";
import Pagination from "@components/common/Pagination/Pagination";
import StoreList from "@components/common/StoreList/StoreList";
import Empty from "@components/common/Empty/Empty";

function DibsPage() {
  const { dibList, totalPages, setPage, page, isLoading } = useGetDibs();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <CommonPageWrap>
      {dibList.length > 0 ? (
        <>
          <Title text={"찜 목록"} size={"x-large"} />
          <StoreList storesData={dibList} isDibs={true} />
          <Pagination totalPages={totalPages} setPage={setPage} page={page} />
        </>
      ) : (
        <Empty text={"찜 목록이 없습니다"} />
      )}
    </CommonPageWrap>
  );
}

export default DibsPage;
