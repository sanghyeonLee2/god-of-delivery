import React from "react";
import { Font } from "@assets/styles/CommonStyle";
import StarRatings from "react-star-ratings/build/star-ratings";
import { BarChart } from "@components/charts/BarChart";
import { TabWrap } from "@pages/user/StorePage/StorePage.styles";
import { RatingWrap } from "@pages/user/StorePage/components/StoreReviewHeader.styles";

function StoreReviewHeader({ rating, reviewStat }) {
  return (
    <TabWrap>
      <Font size={"large"}>가게 평점</Font>
      <RatingWrap>
        <div>
          <Font size={"x-large"} style={{ textAlign: "center" }}>
            {rating.toFixed(1)}
          </Font>
          <StarRatings rating={rating} starRatedColor={"gold"} starDimension={"2rem"} />
        </div>
        <div style={{ width: "60%" }}>
          <BarChart reviewStat={reviewStat} />
        </div>
      </RatingWrap>
    </TabWrap>
  );
}

export default StoreReviewHeader;
