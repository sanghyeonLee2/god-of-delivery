import React from 'react';
import {VerticalSpace} from "../../../assets/styles/CommonStyle";
import {StoreInfoInner, StoreInfoOuter, StoreInfoTitleWrap} from "./StoreInfoLayout";

function StoreInfo(props) {
    return (
        <StoreInfoOuter>
            <StoreInfoInner>
                <StoreInfoTitleWrap>
                    <span>00식당 사상</span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>00식당 사상점</li>
                    <li>상호명</li>
                    <li>운영시간</li>
                    <li>휴무일</li>
                    <li>전화번호</li>
                    <li>배달지역</li>
                </ul>
                <VerticalSpace $margin={"-10px"}/>
                <StoreInfoTitleWrap>
                            <span>
                            가게 소개
                            </span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>사진</li>
                    <li>가게설명</li>
                </ul>
                <VerticalSpace $margin={"-10px"}/>
                <StoreInfoTitleWrap>
                    <span>안내 및 혜택</span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>내용</li>
                </ul>
                <VerticalSpace $margin={"-10px"}/>
                <StoreInfoTitleWrap>
                    <span>가게 인증 내역</span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>내용1</li>
                    <li>내용2</li>
                </ul>
                <VerticalSpace $margin={"-10px"}/>
                <StoreInfoTitleWrap>
                    <span>가게 통계</span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>내용1</li>
                    <li>내용2</li>
                </ul>
                <VerticalSpace $margin={"-10px"}/>
                <StoreInfoTitleWrap>
                    <span>배달팁 안내</span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>내용1</li>
                    <li>내용2</li>
                </ul>
                <VerticalSpace $margin={"-10px"}/>
                <StoreInfoTitleWrap>
                    <span>지역별 추가 배달팁</span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>내용1</li>
                    <li>내용2</li>
                </ul>
                <VerticalSpace $margin={"-10px"}/>
                <StoreInfoTitleWrap>
                    <span>사업자 정보</span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>내용1</li>
                    <li>내용2</li>
                </ul>
                <VerticalSpace $margin={"-10px"}/>
                <StoreInfoTitleWrap>
                    <span>원산지 표기</span>
                </StoreInfoTitleWrap>
                <ul>
                    <li>내용1</li>
                </ul>
            </StoreInfoInner>
        </StoreInfoOuter>
    );
}

export default StoreInfo;