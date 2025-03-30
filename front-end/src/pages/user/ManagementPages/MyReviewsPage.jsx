import React from "react";
import { CommonPageWrap } from "../../../assets/styles/CommonStyle";
import Loading from "components/common/Loading/Loading";
import Review from "components/common/Review/Review";
import Pagination from "components/common/Pagination/Pagination";
import Title from "components/common/Title/Title";
import useGetMyReviews from "./hooks/useGetMyReviews";
import Empty from "components/common/Empty/Empty";

function MyReviewsPage(props) {
  const { reviews, totalPages, isLoading, page, setPage } = useGetMyReviews();
  return (
    <>
      {isLoading && <Loading />}
      {reviews.length > 0 ? (
        <CommonPageWrap>
          <Title text={"리뷰 관리"} size={"x-large"} />
          {reviews?.map((review) => (
            <Review key={review.reviewId} review={review} />
          ))}
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </CommonPageWrap>
      ) : (
        <Empty text={"리뷰가 없습니다"} />
      )}
    </>
  );
}

export default MyReviewsPage;
