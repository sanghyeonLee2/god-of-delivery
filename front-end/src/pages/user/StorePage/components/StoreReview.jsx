import React from "react";
import { VerticalSpace } from "@assets/styles/CommonStyle";
import Loading from "@components/common/Loading/Loading";
import Pagination from "@components/common/Pagination/Pagination";
import Review from "@components/common/Review/Review";
import StoreReviewHeader from "@pages/user/StorePage/components/StoreReviewHeader";
import Empty from "@components/common/Empty/Empty";
import { TabWrap } from "@pages/user/StorePage/StorePage.styles";
import useGetStoreReviews from "@pages/user/StorePage/hooks/useGetStoreReviews";

function StoreReview({ rating }) {
  const { reviews, totalPages, isLoading, page, reviewStat, setPage } = useGetStoreReviews();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {reviews.length > 0 ? (
        <>
          <StoreReviewHeader reviewStat={reviewStat} rating={rating} />
          <VerticalSpace />
          <TabWrap>
            {reviews.map((review) => (
              <Review review={review} key={review.reviewId} />
            ))}
          </TabWrap>
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
      ) : (
        <Empty text="리뷰가 없습니다" />
      )}
    </>
  );
}

export default StoreReview;
