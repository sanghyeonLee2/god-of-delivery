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
import {Font, VerticalSpace} from "../../../assets/styles/CommonStyle";
import StarRatings from "react-star-ratings/build/star-ratings";
import {BarChart} from "../../../components/charts/BarChart";
import {LineChart} from "../../../components/charts/LineChart";


function StoreReview(props) {
    return (
        <StoreReviewWrap>
            <CeoNoticeTitleWrap>
                <Font size={"large"}>
                    사장님 공지
                </Font>
                <Font size={"small"} color={"lightgray"}>
                    2024년 5월 17일
                </Font>
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
                <Font>
                    최근 리뷰 35개
                </Font>
                <Font>
                    사장님 댓글 0
                </Font>
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

                        <Font>
                            5점
                        </Font>
                        &nbsp;&nbsp;
                        <Font size={"small"} color={"gray"}>리뷰 225</Font>
                        &nbsp;&nbsp;
                        <Font size={"small"} color={"gray"}>평균별점 5.0</Font>
                        <div>
                            <StarRatings rating={4.9}
                                         starRatedColor={"gold"}
                                         starDimension={"20px"}
                                         starSpacing={"2px"}
                            />
                            &nbsp;
                            <Font size={"small"} color={"gray"}>이번주</Font>
                        </div>
                        <OrderedMenuWrap>
                            <Font>
                                1인 목살
                            </Font>
                        </OrderedMenuWrap>
                    </UserReviewInfoWrap>
                </UserReviewWrap>
            </CurrentReviewWrap>
        </StoreReviewWrap>
    );
}

export default StoreReview;