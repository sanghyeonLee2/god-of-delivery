import React from 'react';
import {AverageTimeWrap, StoreInfoWrap, StoreLogo, StoreOuter} from "./StoreBoxLayout";
import {useNavigate} from "react-router-dom";
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";

function StoreBox({storeInfo}) {
    const navigate = useNavigate()
    return (
        <StoreOuter onClick={() => navigate(`/store/${storeInfo?.storeId}`)}>
            <StoreLogo/>
            <StoreInfoWrap>
                <Font size={"large"}>
                    {storeInfo?.storeName}
                </Font>
                <FlexOnly>
                    <Font size={"small"} color={"#FFA800"}>{storeInfo?.rating}</Font>
                    &nbsp;|&nbsp;
                    <Font size={"small"}>찜 {storeInfo?.dipsCnt}</Font>
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