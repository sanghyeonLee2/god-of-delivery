import React from 'react';
import {CommonPageWrap} from "../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import useGetReviews from "../../hooks/useGetReviews";
import Loading from "components/common/Loading/Loading";
import Review from "components/common/Review/Review";
import Pagination from "components/common/Pagination/Pagination";

function OwnerReviewPage(props) {
    const {
        reviews,
        totalPages,
        isLoading,
        page,
        setPage
    } = useGetReviews("ownerReviews");
    if (isLoading) {
        return <Loading/>;
    }
    return (
        <CommonPageWrap>
            <Title text={"사장님 리뷰 관리"} size={"x-large"}/>
            {reviews.map((review) => <Review key={review.reviewId} review={review} isOwner={true}/>)}
            <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
        </CommonPageWrap>
    );
}

export default OwnerReviewPage;