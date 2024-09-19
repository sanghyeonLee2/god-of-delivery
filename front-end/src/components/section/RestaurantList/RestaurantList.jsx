import React from 'react';
import {RecommendedInner, RecommendedOuter, RecommendTitle, RecommendTitleWrapper} from "./RestaurantListLayout";
import RestaurantBox from "../../common/RestaurantBox/RestaurantBox";
import useGet from "../../../hooks/useGet";
import Loading from "../../common/Loading/Loading";
import {useRecoilValue} from "recoil";
import {sortingState} from "../../../recoil/search/atoms";

function RestaurantList({listType, categoryId}) {
    const [data, isError, status, isLoading] = useGet("stores/busan/sasang-gu/one-serve")
    const sorting = useRecoilValue(sortingState)
    if (isLoading)
        return <Loading/>
    return (
        <RecommendedOuter>
            <RecommendTitleWrapper>
                <RecommendTitle>
                    {listType}
                </RecommendTitle>
            </RecommendTitleWrapper>
            <RecommendedInner>
                <RecommendedInner>
                    {data.data.sort((a, b) =>
                        b[sorting] - a[sorting]
                    ).map((e) => (e.storeCategory === categoryId || categoryId === "전체보기") &&
                        <RestaurantBox restaurantList={e} key={e.storeId}/>)}
                    {/* {listType === "추천 맛집" ?
                        data.data.map((e) => (e.storeCategory === categoryId || categoryId === "전체보기") &&
                            <RestaurantBox restaurantList={e} key={e.storeId}/>) :
                        restaurantDummy.map((e) => (e.category === categoryId || categoryId === "전체보기") &&
                            <RestaurantBox restaurantList={e} key={e.id}/>)}*/}
                </RecommendedInner>
            </RecommendedInner>
        </RecommendedOuter>
    );
}

export default RestaurantList;