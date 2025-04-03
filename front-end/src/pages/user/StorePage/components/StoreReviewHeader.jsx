import React from "react";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import StarRatings from "react-star-ratings/build/star-ratings";
import { BarChart } from "@components/charts/BarChart";
import { TabWrap } from "@pages/user/StorePage/StorePage.styles";

function StoreReviewHeader({ rating, reviewStat }) {
  return (
    <TabWrap>
      <Font size={"large"}>가게 평점</Font>
      <FlexOnly justify="center">
        <div>
          <Font size={"x-large"} style={{ textAlign: "center" }}>
            {rating.toFixed(1)}
          </Font>
          <StarRatings rating={rating} starRatedColor={"gold"} starDimension={"2rem"} />
        </div>
        <div style={{ width: "60%" }}>
          <BarChart reviewStat={reviewStat} />
        </div>
      </FlexOnly>
    </TabWrap>
  );
}

export default StoreReviewHeader;
