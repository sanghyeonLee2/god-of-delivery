import React from 'react';
import {AverageTimeWrap, StoreInfoWrap, StoreLogo, StoreOuter} from "./StoreBoxLayout";
import {useNavigate} from "react-router-dom";
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import star from "../../../assets/img/star.png"

function StoreBox({storeInfo}) {
    const navigate = useNavigate()
    return (
        <StoreOuter onClick={() => navigate(`${storeInfo?.storeId}`)}>
            <StoreLogo/>
            <StoreInfoWrap>
                <Font size={"large"}>
                    {storeInfo?.storeName}
                </Font>
                <FlexOnly>
                    <img src={star} alt={star} width={17} style={{marginBottom: "4.3px"}}/>&nbsp;
                    <Font size={"small"} color={"#FFD700"}>{storeInfo?.rating}</Font>
                    &nbsp;|&nbsp;
                    <Font size={"small"}>리뷰 {storeInfo?.reviewCnt}</Font>
                </FlexOnly>
                <FlexOnly>
                    <Font size={"small"} color={"gray"}>{storeInfo?.minDeliveryPrice}원 이상
                        배달</Font>
                    <AverageTimeWrap>
                        <Font size={"small"} color={"gray"}>
                            {storeInfo?.operationHours}
                        </Font>
                    </AverageTimeWrap>
                </FlexOnly>
            </StoreInfoWrap>
        </StoreOuter>
    );
}

export default StoreBox;