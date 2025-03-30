import React from "react";
import { CommonPageWrap } from "../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import useGetOwnerReviews from "./hooks/useGetOwnerReviews";
import Loading from "components/common/Loading/Loading";
import Review from "components/common/Review/Review";
import Pagination from "components/common/Pagination/Pagination";
import Empty from "components/common/Empty/Empty";

function OwnerReviewPage() {
  const { reviews, totalPages, isLoading, page, setPage } = useGetOwnerReviews();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <CommonPageWrap>
      {reviews.length > 0 ? (
        <>
          <Title text={"사장님 리뷰 관리"} size={"x-large"} />
          {reviews.map((review) => (
            <Review key={review.reviewId} review={review} />
          ))}
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
      ) : (
        <Empty text={"리뷰가 없습니다"} />
      )}
    </CommonPageWrap>
  );
}

export default OwnerReviewPage;
