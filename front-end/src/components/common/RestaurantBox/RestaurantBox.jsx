import React from 'react';
import {
    AverageTimeLi,
    RestaurantAboutText,
    RestaurantInfoUl,
    RestaurantInfoWrapper,
    RestaurantInner,
    RestaurantLogo,
    RestaurantOuter,
    RestaurantTitle
} from "./RestaurantBoxLayout";

function RestaurantBox({restaurantList}) {
    return (
        <RestaurantOuter>
            <RestaurantInner>
                <RestaurantLogo></RestaurantLogo>
                <RestaurantInfoWrapper>
                    <RestaurantTitle>{restaurantList?.title}</RestaurantTitle>
                    <RestaurantInfoUl>
                        <li><RestaurantAboutText name={"rating"}>{restaurantList?.rating}</RestaurantAboutText></li>
                        &nbsp;|&nbsp;
                        <li><RestaurantAboutText>리뷰 {restaurantList?.review}</RestaurantAboutText></li>
                        &nbsp;|&nbsp;
                        <li><RestaurantAboutText>사장님 리뷰 {restaurantList?.bossReview}</RestaurantAboutText></li>
                    </RestaurantInfoUl>
                    <RestaurantInfoUl>
                        <li><RestaurantAboutText name={"pass"}>배달패스</RestaurantAboutText></li>
                        &nbsp;|&nbsp;
                        <li><RestaurantAboutText name={"minimum"}>{restaurantList?.minPrice}원 이상
                            배달</RestaurantAboutText></li>
                        <AverageTimeLi>
                            <small>
                                {restaurantList?.averTime}
                            </small>
                        </AverageTimeLi>
                    </RestaurantInfoUl>
                </RestaurantInfoWrapper>
            </RestaurantInner>
        </RestaurantOuter>
    );
}

export default RestaurantBox;