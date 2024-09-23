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
                <RestaurantLogo/>
                <RestaurantInfoWrapper>
                    <RestaurantTitle>{restaurantList?.storeName}</RestaurantTitle>
                    <RestaurantInfoUl>
                        <li><RestaurantAboutText name={"rating"}>{restaurantList?.rating}</RestaurantAboutText></li>
                        &nbsp;|&nbsp;
                        <li><RestaurantAboutText>찜 {restaurantList?.dipsCnt}</RestaurantAboutText></li>
                        &nbsp;|&nbsp;
                        <li><RestaurantAboutText>리뷰 {restaurantList?.reviewCnt}</RestaurantAboutText></li>
                    </RestaurantInfoUl>
                    <RestaurantInfoUl>
                        <li><RestaurantAboutText name={"pass"}>배달패스</RestaurantAboutText></li>
                        &nbsp;|&nbsp;
                        <li><RestaurantAboutText name={"minimum"}>{restaurantList?.minDeliveryPrice}원 이상
                            배달</RestaurantAboutText></li>
                        <AverageTimeLi>
                            <small>
                                {restaurantList?.operationHours}
                            </small>
                        </AverageTimeLi>
                    </RestaurantInfoUl>
                </RestaurantInfoWrapper>
            </RestaurantInner>
        </RestaurantOuter>
    );
}

export default RestaurantBox;