import React from 'react';
import {ModalContentWrap} from "components/modal/ModalLayout";
import {ModalReviewForm} from "components/modal/CreateReview/CreateReviewLayout";
import {ModalBtn} from "components/common/Button/main/MainButton";
import ReviewMain from "components/common/Review/components/ReviewMain";
import Textarea from "components/common/TextArea/TextArea";
import {useCreateOwnerReview} from "../../../hooks/useCreateOwnerReview";

function CreateOwnerReview({modalData}) {
    const {
        register,
        handleSubmit,
        handleCreateOwnerReview,
    } = useCreateOwnerReview(modalData.reviewId);
    return (
        <>
            <ModalContentWrap>
                <div style={{width: '80%', margin: '0 auto'}}>
                    <ReviewMain review={modalData}/>
                    <ModalReviewForm>
                        <Textarea {...register("content")} placeholder={"리뷰를 작성 해주세요"}/>
                    </ModalReviewForm>
                </div>
            </ModalContentWrap>
            <ModalBtn text={"등록"} onClick={
                handleSubmit(
                    (data) => handleCreateOwnerReview(data)
                )}/>
        </>
    );
}

export default CreateOwnerReview;