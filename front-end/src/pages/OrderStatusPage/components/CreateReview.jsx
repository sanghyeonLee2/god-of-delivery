import React from 'react';
import {MainBtn} from "components/common/Button/main/MainButton";
import {ReviewForm} from "./CreateReviewLayout";
import StarRatings from "react-star-ratings/build/star-ratings";
import {CommonSectionWrap} from "../../../assets/styles/CommonStyle";
import {usePost} from "../../../hooks/usePost";
import useCreateReviewInitForm from "../../../hooks/useCreateReviewInitForm";

function CreateReview({orderId}) {
    const {register, watch, handleRatingChange, handleSubmit} =
        useCreateReviewInitForm(orderId);
    const {mutate: handleCreateReview} = usePost("review-post", true)
    return (
        <CommonSectionWrap>
            <ReviewForm onSubmit={handleSubmit((data) => handleCreateReview(data))}>
                <div style={{marginBottom: 5}}>
                    <StarRatings
                        rating={watch("rating")}
                        starRatedColor="gold"
                        starHoverColor="gold"
                        changeRating={handleRatingChange} // 별점 선택 시 업데이트
                        numberOfStars={5}
                        name="rating"
                        starDimension="30px"
                        starSpacing="5px"
                    />
                    <input type={"file"} {...register("reviewImg")} />
                </div>
                <textarea {...register("reviewText")} placeholder={"리뷰를 작성해보세요"}/>
                <MainBtn type={"submit"} text={"등록"}/>
            </ReviewForm>
        </CommonSectionWrap>
    );
}

export default CreateReview;