import React from 'react';
import {RecommendedOuter, RecommendedWrap} from "./StoreListLayout";
import StoreBox from "../../StorePage/components/StoreBox";
import useGet from "../../../hooks/useGet";
import Loading from "../../../components/common/Loading/Loading";
import {useRecoilValue} from "recoil";
import {sortingState} from "../../../recoil/search/atoms";
import {Font} from "../../../assets/styles/CommonStyle";

function StoreList({listType, categoryId}) {
    const {data: storesData, isError, status, isLoading} = useGet("stores")
    const sorting = useRecoilValue(sortingState)

    if (isLoading)
        return <Loading/>
    return (
        <RecommendedOuter>
            <Font>
                {listType}
            </Font>
            <RecommendedWrap>
                {storesData?.sort((a, b) =>
                    b[sorting] - a[sorting]
                ).map((e) => (e.storeCategory === categoryId || categoryId === "전체보기") &&
                    <StoreBox storeInfo={e} key={e.storeId}/>)}
            </RecommendedWrap>
        </RecommendedOuter>
    );
}

export default StoreList;