import React from 'react';
import {ReviewImgWrap, TotalRatingWrap} from "./StoreReviewLayout";
import {FlexOnly, Font, VerticalSpace} from "../../../assets/styles/CommonStyle";
import StarRatings from "react-star-ratings/build/star-ratings";
import {BarChart} from "../../../components/charts/BarChart";
import {TabWrap} from "../StorePageLayout";
import Loading from "../../../components/common/Loading/Loading";
import Pagination from "../../../components/common/Pagination/Pagination";
import useGetReviews from "../../../hooks/useGetReviews";


function StoreReview({rating, storeId}) {
    const {
        reviews,
        totalPages,
        isError,
        isLoading,
        currentPage,
        reviewStat,
        setCurrentPage
    } = useGetReviews(`reviews/${storeId}`)
    if (isLoading) {
        return <Loading/>
    }
    return (
        <>
            <TabWrap>
                <Font size={"large"}>
                    가게 평점
                </Font>
                <FlexOnly>
                    <TotalRatingWrap>
                        <Font size={"x-large"}>{rating}</Font>
                        <StarRatings
                            rating={rating}
                            starRatedColor={"gold"}
                            starDimension={"20px"}
                        />
                    </TotalRatingWrap>
                    <div style={{width: "60%"}}>
                        <BarChart reviewStat={reviewStat}/>
                    </div>
                </FlexOnly>
            </TabWrap>
            <VerticalSpace/>
            <TabWrap>
                {reviews.map((review) =>
                    <div key={review.reviewId}>
                        <FlexOnly justify={"space-between"}>
                            <Font size={"large"}>{review?.userId}</Font>
                            <Font size={"small"} color={"gray"}>{review?.date}</Font>
                        </FlexOnly>
                        <StarRatings rating={review?.rate}
                                     starRatedColor={"gold"}
                                     starDimension={"20px"}
                                     starSpacing={"2px"}/>
                        <ReviewImgWrap/>
                        <Font>
                            {review?.content}
                        </Font>
                    </div>
                )}
            </TabWrap>
            <Pagination totalPages={totalPages} currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
        </>
    );
}

export default StoreReview;