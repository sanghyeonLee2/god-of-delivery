import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings";
import { useWatch } from "react-hook-form";
import Textarea from "@components/common/TextArea/TextArea";

function ReviewUpdate({ review, form }) {
  const { rating } = useWatch({ control: form.control });
  return (
    <div>
      <StarRatings
        rating={rating}
        changeRating={form.handleRatingChange}
        starRatedColor={"gold"}
        name="rating"
        starHoverColor="gold"
        starDimension={"3rem"}
      />
      <Textarea {...form.register("content")} defaultValue={review?.content} />
    </div>
  );
}

export default ReviewUpdate;
