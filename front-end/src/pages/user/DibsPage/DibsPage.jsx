import React from 'react';
import {CommonPageWrap} from "../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import useGetDibs from "../../../hooks/useGetDibs";
import Loading from "components/common/Loading/Loading";
import Pagination from "components/common/Pagination/Pagination";
import StoreList from "components/common/StoreList/StoreList";

function DibsPage(props) {
    const {storesData, totalPages, setPage, page, isLoading} = useGetDibs();
    if (isLoading) {
        return <Loading/>;
    }
    return (
        <CommonPageWrap>
            <Title text={"찜 목록"} size={"x-large"}/>
            <StoreList storesData={storesData} isDibs={true}/>
            <Pagination totalPages={totalPages} setPage={setPage} page={page}/>
        </CommonPageWrap>
    );
}

export default DibsPage;