import React from 'react';
import {FlexOnly, Font, VerticalSpace} from "../../../assets/styles/CommonStyle";
import StarRatings from "react-star-ratings/build/star-ratings";
import {BarChart} from "components/charts/BarChart";
import {TabWrap} from "../StorePageLayout";
import Loading from "../../../components/common/Loading/Loading";
import Pagination from "../../../components/common/Pagination/Pagination";
import useGetReviews from "../../../hooks/useGetReviews";
import Review from "components/common/Review/Review";


function StoreReview({rating}) {
    const {
        reviews,
        totalPages,
        isLoading,
        page,
        reviewStat,
        setPage
    } = useGetReviews("storeReviews");
    if (isLoading) {
        return <Loading/>
    }
    return (
        <>
            <TabWrap>
                <Font size={"large"}>
                    가게 평점
                </Font>
                <FlexOnly justify="center">
                    <div>
                        <Font size={"x-large"} style={{textAlign: "center"}}>{rating.toFixed(1)}</Font>
                        <StarRatings
                            rating={rating}
                            starRatedColor={"gold"}
                            starDimension={"20px"}
                        />
                    </div>
                    <div style={{width: "60%"}}>
                        <BarChart reviewStat={reviewStat}/>
                    </div>
                </FlexOnly>
            </TabWrap>
            <VerticalSpace/>
            <TabWrap>
                {reviews.map((review) => <Review review={review} key={review.reviewId}/>)}
            </TabWrap>
            <Pagination totalPages={totalPages} page={page}
                        setPage={setPage}/>
        </>
    );
}

export default StoreReview;