import React from 'react';
import {
    AverageTimeLi,
    StoreAboutText,
    StoreInfoUl,
    StoreInfoWrapper,
    StoreInner,
    StoreLogo,
    StoreOuter,
    StoreTitle
} from "./StoreBoxLayout";
import {useNavigate} from "react-router-dom";

function StoreBox({storeInfo}) {
    const navigate = useNavigate()
    return (
        <StoreOuter onClick={() => navigate(`/store/${storeInfo?.storeId}`)}>
            <StoreInner>
                <StoreLogo/>
                <StoreInfoWrapper>
                    <StoreTitle>{storeInfo?.storeName}</StoreTitle>
                    <StoreInfoUl>
                        <li><StoreAboutText name={"rating"}>{storeInfo?.rating}</StoreAboutText></li>
                        &nbsp;|&nbsp;
                        <li><StoreAboutText>찜 {storeInfo?.dipsCnt}</StoreAboutText></li>
                        &nbsp;|&nbsp;
                        <li><StoreAboutText>리뷰 {storeInfo?.reviewCnt}</StoreAboutText></li>
                    </StoreInfoUl>
                    <StoreInfoUl>
                        <li><StoreAboutText name={"pass"}>배달패스</StoreAboutText></li>
                        &nbsp;|&nbsp;
                        <li><StoreAboutText name={"minimum"}>{storeInfo?.minDeliveryPrice}원 이상
                            배달</StoreAboutText></li>
                        <AverageTimeLi>
                            <small>
                                {storeInfo?.operationHours}
                            </small>
                        </AverageTimeLi>
                    </StoreInfoUl>
                </StoreInfoWrapper>
            </StoreInner>
        </StoreOuter>
    );
}

export default StoreBox;