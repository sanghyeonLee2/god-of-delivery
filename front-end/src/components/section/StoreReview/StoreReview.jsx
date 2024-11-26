import React from 'react';
import {
    CeoNoticeTitleWrap,
    CurrentReviewWrap,
    ImgWrap,
    LineChartWrap,
    OrderedMenuWrap,
    RatingChartWrap,
    RatingInner,
    RatingOuter,
    RatingText,
    ReviewNoticeWrap,
    ReviewSortingWrap,
    SortBtn,
    StoreReviewWrap,
    TotalRatingWrap,
    UserIcon,
    UserIconWrap,
    UserReviewInfoWrap,
    UserReviewWrap
} from "./StoreReviewLayout";
import {
    MiddleSizeFont,
    MiddleSizeTitleFont,
    SmallSizeFont,
    SmallSizeTitleFont,
    VerticalSpace
} from "../../../assets/styles/CommonStyle";
import StarRatings from "react-star-ratings/build/star-ratings";
import {BarChart} from "../Chart/BarChart";
import {LineChart} from "../Chart/LineChart";


function StoreReview(props) {
    return (
        <StoreReviewWrap>
            <CeoNoticeTitleWrap>
                <SmallSizeTitleFont>
                    <p>사장님 공지</p>
                </SmallSizeTitleFont>
                <SmallSizeFont color={"lightgray"}>
                    2024년 5월 17일
                </SmallSizeFont>
            </CeoNoticeTitleWrap>
            <ul>
                <li>
                    <ImgWrap></ImgWrap>
                </li>
                <ReviewNoticeWrap>
                    <p>네네 치킨 리뷰 이벤트
                        💝리뷰작성 이벤트 참여방법💝
                        ☝️주문시 찜❤️버튼을 꾹 누르시고
                        ✌️리뷰이벤트 메뉴에서 한가지 주문(대표메뉴 아래칸에 있어요)
                        요청사항 기재 X</p>
                </ReviewNoticeWrap>
                <RatingOuter>
                    <RatingInner>
                        <TotalRatingWrap>
                            <RatingText>4.9</RatingText>
                            <StarRatings
                                rating={4.9}
                                starRatedColor={"gold"}
                                starDimension={"20px"}
                            />
                        </TotalRatingWrap>
                        <RatingChartWrap>
                            <BarChart/>
                        </RatingChartWrap>
                    </RatingInner>
                    <LineChartWrap>
                        <LineChart/>
                    </LineChartWrap>
                </RatingOuter>
            </ul>
            <VerticalSpace/>
            <CurrentReviewWrap>
                <MiddleSizeTitleFont>
                    <p>
                        최근 리뷰 35개
                    </p>
                </MiddleSizeTitleFont>
                <MiddleSizeFont>
                    사장님 댓글 0
                </MiddleSizeFont>
                <ReviewSortingWrap>
                    <SortBtn>
                        <span>최신순</span>
                    </SortBtn>
                    <SortBtn>
                        <span>사진 리뷰만 보기</span>
                    </SortBtn>
                </ReviewSortingWrap>
                <UserReviewWrap>
                    <UserIconWrap>
                        <UserIcon/>
                    </UserIconWrap>
                    <UserReviewInfoWrap>
                        <div>
                            <MiddleSizeFont>
                                5점
                            </MiddleSizeFont>
                            &nbsp;&nbsp;
                            <SmallSizeFont color={"gray"}>리뷰 225</SmallSizeFont>
                            &nbsp;&nbsp;
                            <SmallSizeFont color={"gray"}>평균별점 5.0</SmallSizeFont>
                        </div>
                        <StarRatings rating={4.9}
                                     starRatedColor={"gold"}
                                     starDimension={"20px"}
                                     starSpacing={"2px"}
                        />
                        &nbsp;
                        <SmallSizeFont color={"gray"}>이번주</SmallSizeFont>
                        <OrderedMenuWrap>
                            <MiddleSizeFont>
                                1인 목살
                            </MiddleSizeFont>
                        </OrderedMenuWrap>
                    </UserReviewInfoWrap>
                </UserReviewWrap>
            </CurrentReviewWrap>
        </StoreReviewWrap>
    );
}

export default StoreReview;