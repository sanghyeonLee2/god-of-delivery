import React from 'react';
import {AverageTimeWrap, StoreInfoWrap, StoreInner, StoreLogo, StoreOuter} from "./StoreBoxLayout";
import {useNavigate} from "react-router-dom";
import {FlexOnly, MiddleSizeTitleFont, SmallSizeFont} from "../../../assets/styles/CommonStyle";

function StoreBox({storeInfo}) {
    const navigate = useNavigate()
    return (
        <StoreOuter onClick={() => navigate(`/store/${storeInfo?.storeId}`)}>
            <StoreInner>
                <StoreLogo/>
                <StoreInfoWrap>
                    <MiddleSizeTitleFont>
                        {storeInfo?.storeName}
                    </MiddleSizeTitleFont>
                    <FlexOnly element={"ul"}>
                        <li><SmallSizeFont color={"#FFA800"}>{storeInfo?.rating}</SmallSizeFont></li>
                        &nbsp;|&nbsp;
                        <li><SmallSizeFont>찜 {storeInfo?.dipsCnt}</SmallSizeFont></li>
                        &nbsp;|&nbsp;
                        <li><SmallSizeFont>리뷰 {storeInfo?.reviewCnt}</SmallSizeFont></li>
                    </FlexOnly>
                    <FlexOnly element={"ul"}>
                        <li><SmallSizeFont color={"red"}>배달패스</SmallSizeFont></li>
                        &nbsp;|&nbsp;
                        <li><SmallSizeFont color={"gray"}>{storeInfo?.minDeliveryPrice}원 이상
                            배달</SmallSizeFont></li>
                        <AverageTimeWrap>
                            <SmallSizeFont color={"gray"}>
                                {storeInfo?.operationHours}
                            </SmallSizeFont>
                        </AverageTimeWrap>
                    </FlexOnly>
                </StoreInfoWrap>
            </StoreInner>
        </StoreOuter>
    );
}

export default StoreBox;