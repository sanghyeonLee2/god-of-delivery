import React from 'react';
import {AverageTimeWrap, StoreInfoWrap, StoreInner, StoreLogo, StoreOuter} from "./StoreBoxLayout";
import {useNavigate} from "react-router-dom";
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";

function StoreBox({storeInfo}) {
    const navigate = useNavigate()
    return (
        <StoreOuter onClick={() => navigate(`/store/${storeInfo?.storeId}`)}>
            <StoreInner>
                <StoreLogo/>
                <StoreInfoWrap>
                    <Font size={"large"}>
                        {storeInfo?.storeName}
                    </Font>
                    <FlexOnly element={"ul"}>
                        <li><Font size={"small"} color={"#FFA800"}>{storeInfo?.rating}</Font></li>
                        &nbsp;|&nbsp;
                        <li><Font size={"small"}>찜 {storeInfo?.dipsCnt}</Font></li>
                        &nbsp;|&nbsp;
                        <li><Font size={"small"}>리뷰 {storeInfo?.reviewCnt}</Font></li>
                    </FlexOnly>
                    <FlexOnly element={"ul"}>
                        <li><Font size={"small"} color={"gray"}>{storeInfo?.minDeliveryPrice}원 이상
                            배달</Font></li>
                        <AverageTimeWrap>
                            <Font size={"small"} color={"gray"}>
                                {storeInfo?.operationHours}
                            </Font>
                        </AverageTimeWrap>
                    </FlexOnly>
                </StoreInfoWrap>
            </StoreInner>
        </StoreOuter>
    );
}

export default StoreBox;