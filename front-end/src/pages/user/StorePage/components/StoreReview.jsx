import React from "react";
import Loading from "@components/common/Loading/Loading";
import Pagination from "@components/common/Pagination/Pagination";
import Review from "@components/common/Review/Review";
import Empty from "@components/common/Empty/Empty";
import { TabWrap } from "@pages/user/StorePage/StorePage.styles";
import useGetStoreReviews from "@pages/user/StorePage/hooks/useGetStoreReviews";
import Title from "@components/common/Title/Title";

function StoreReview() {
  const { reviews, totalPages, isLoading, page, setPage } = useGetStoreReviews();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {reviews.length > 0 ? (
        <>
          <TabWrap>
            <Title size={"x-large"} text={"가게 리뷰"} />
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
