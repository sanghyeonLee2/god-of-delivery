import React from 'react';
import {RecommendedInner, RecommendedOuter, RecommendTitle, RecommendTitleWrapper} from "./RestaurantListLayout";
import RestaurantBox from "../../common/RestaurantBox/RestaurantBox";
import restaurantDummy from "../../../assets/data/restaurantDummy.json";
import recommendedDummy from "../../../assets/data/recommended.json";

function RestaurantList({listType, categoryId}) {
    return (
        <RecommendedOuter>
            <RecommendTitleWrapper>
                <RecommendTitle>
                    {listType}
                </RecommendTitle>
            </RecommendTitleWrapper>
            <RecommendedInner>
                <RecommendedInner>
                    {listType === "추천 맛집" ?
                        /*중복코드 제거 하기!!*/
                        recommendedDummy.map((e) => (e.category === categoryId || categoryId === 0) &&
                            <RestaurantBox restaurantList={e} key={e.id}/>) :
                        restaurantDummy.map((e) => (e.category === categoryId || categoryId === 0) &&
                            <RestaurantBox restaurantList={e} key={e.id}/>)}
                </RecommendedInner>
            </RecommendedInner>
        </RecommendedOuter>
    );
}

export default RestaurantList;