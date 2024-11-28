import React from 'react';
import {FixedTextInterval, Font, VerticalSpace} from "../../../assets/styles/CommonStyle";
import {StoreInfoWrap} from "./StoreInfoLayout";

function StoreInfo({storeInfo}) {
    return (
        <StoreInfoWrap>
            <Font size={"large"}>
                {storeInfo?.storeName}
            </Font>
            <FixedTextInterval>
                <li><p>상호명</p><span>{storeInfo?.tradeName}</span></li>
                <li><p>운영시간</p><span>{storeInfo?.hours}</span></li>
                <li><p>휴무일</p><span>{storeInfo?.dayOff}</span></li>
                <li><p>전화번호</p><span>{storeInfo?.phoneNumber}</span></li>
                <li><p>배달지역</p><span>{storeInfo?.area}</span></li>
                <li><p>편의시설</p><span>{storeInfo?.amenities}</span></li>
            </FixedTextInterval>
            <VerticalSpace/>
            <Font size={"large"}>
                가게 소개
            </Font>
            <ul>
                <li>사진</li>
                <li>{storeInfo?.introduction}</li>
            </ul>
            <VerticalSpace/>
            <Font size={"large"}>
                안내 및 혜택
            </Font>
            <ul>
                <li>{storeInfo?.introduction}</li>
            </ul>
            <VerticalSpace/>
            <Font size={"large"}>
                가게 인증 내역
            </Font>
            <ul>
                <li>내용1</li>
                <li>내용2</li>
            </ul>
            <VerticalSpace/>
            <Font size={"large"}>
                가게 통계
            </Font>
            <FixedTextInterval>
                <li><p>최근 주문수</p><span>{storeInfo?.currentOrder}</span></li>
                <li><p>최근 리뷰수</p><span>{storeInfo?.allReview}</span></li>
                <li><p>찜</p><span>{storeInfo?.dips}</span></li>
            </FixedTextInterval>
            <VerticalSpace/>
            <Font size={"large"}>
                배달팁 안내
            </Font>
            <ul>
                <li>내용1</li>
                <li>내용2</li>
            </ul>
            <VerticalSpace/>
            <Font size={"large"}>
                지역별 추가 배달팁
            </Font>
            <ul>
                <li>내용1</li>
                <li>내용2</li>
            </ul>
            <VerticalSpace/>
            <Font size={"large"}>
                사업자 정보
            </Font>
            <FixedTextInterval>
                <li><p>대표자명</p><span>{storeInfo?.ownerName}</span></li>
                <li><p>상호명</p><span>{storeInfo?.tradeName}</span></li>
                <li><p>사업자주소</p><span>{storeInfo?.businessAddress}</span></li>
                <li><p>사업자</p><span>{storeInfo?.businessNum}</span></li>
                <li><p>등록번호</p><span>l</span></li>
            </FixedTextInterval>
            <VerticalSpace/>
            <Font size={"large"}>
                원산지 표기
            </Font>
            <FixedTextInterval>
                <li><span>{storeInfo?.origin}</span></li>
            </FixedTextInterval>
        </StoreInfoWrap>
    );
}

export default StoreInfo;