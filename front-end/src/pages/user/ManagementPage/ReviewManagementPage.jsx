import React from "react";
import { CommonPageWrap } from "../../../assets/styles/CommonStyle";
import Loading from "components/common/Loading/Loading";
import Review from "components/common/Review/Review";
import Pagination from "components/common/Pagination/Pagination";
import useGetReviews from "../../../hooks/useGetReviews";
import Title from "components/common/Title/Title";

function ReviewManagementPage(props) {
  const { reviews, totalPages, isLoading, page, setPage } =
    useGetReviews("myReviews");
  return (
    <>
      {isLoading && <Loading />}
      <CommonPageWrap>
        <Title text={"리뷰 관리"} size={"x-large"} />
        {reviews?.map((review) => (
          <Review key={review.reviewId} review={review} />
        ))}
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      </CommonPageWrap>
    </>
  );
}

export default ReviewManagementPage;
