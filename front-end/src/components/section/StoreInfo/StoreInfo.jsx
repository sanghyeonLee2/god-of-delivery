import React from 'react';
import {FixedTextInterval, SmallSizeTitleFont, VerticalSpace} from "../../../assets/styles/CommonStyle";
import {StoreInfoWrap} from "./StoreInfoLayout";

function StoreInfo({storeInfo}) {
    return (
        <StoreInfoWrap>
            <SmallSizeTitleFont>
                <p>{storeInfo?.storeName}</p>
            </SmallSizeTitleFont>
            <FixedTextInterval>
                <li><p>상호명</p><span>{storeInfo?.tradeName}</span></li>
                <li><p>운영시간</p><span>{storeInfo?.hours}</span></li>
                <li><p>휴무일</p><span>{storeInfo?.dayOff}</span></li>
                <li><p>전화번호</p><span>{storeInfo?.phoneNumber}</span></li>
                <li><p>배달지역</p><span>{storeInfo?.area}</span></li>
                <li><p>편의시설</p><span>{storeInfo?.amenities}</span></li>
            </FixedTextInterval>
            <VerticalSpace/>
            <SmallSizeTitleFont>
                <p>가게 소개</p>
            </SmallSizeTitleFont>
            <ul>
                <li>사진</li>
                <li>{storeInfo?.introduction}</li>
            </ul>
            <VerticalSpace/>
            <SmallSizeTitleFont>
                <p>안내 및 혜택</p>
            </SmallSizeTitleFont>
            <ul>
                <li>{storeInfo?.introduction}</li>
            </ul>
            <VerticalSpace/>
            <SmallSizeTitleFont>
                <p>가게 인증 내역</p>
            </SmallSizeTitleFont>
            <ul>
                <li>내용1</li>
                <li>내용2</li>
            </ul>
            <VerticalSpace/>
            <SmallSizeTitleFont>
                <p>가게 통계</p>
            </SmallSizeTitleFont>
            <FixedTextInterval>
                <li><p>최근 주문수</p><span>{storeInfo?.currentOrder}</span></li>
                <li><p>최근 리뷰수</p><span>{storeInfo?.allReview}</span></li>
                <li><p>찜</p><span>{storeInfo?.dips}</span></li>
            </FixedTextInterval>
            <VerticalSpace/>
            <SmallSizeTitleFont>
                <p>배달팁 안내</p>
            </SmallSizeTitleFont>
            <ul>
                <li>내용1</li>
                <li>내용2</li>
            </ul>
            <VerticalSpace/>
            <SmallSizeTitleFont>
                <p>지역별 추가 배달팁</p>
            </SmallSizeTitleFont>
            <ul>
                <li>내용1</li>
                <li>내용2</li>
            </ul>
            <VerticalSpace/>
            <SmallSizeTitleFont>
                <p>사업자 정보</p>
            </SmallSizeTitleFont>
            <FixedTextInterval>
                <li><p>대표자명</p><span>{storeInfo?.ownerName}</span></li>
                <li><p>상호명</p><span>{storeInfo?.tradeName}</span></li>
                <li><p>사업자주소</p><span>{storeInfo?.businessAddress}</span></li>
                <li><p>사업자</p><span>{storeInfo?.businessNum}</span></li>
                <li><p>등록번호</p><span>l</span></li>
            </FixedTextInterval>
            <VerticalSpace/>
            <SmallSizeTitleFont>
                <p>원산지 표기</p>
            </SmallSizeTitleFont>
            <FixedTextInterval>
                <li><span>{storeInfo?.origin}</span></li>
            </FixedTextInterval>
        </StoreInfoWrap>
    );
}

export default StoreInfo;