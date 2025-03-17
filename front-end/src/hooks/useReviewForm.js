import {useForm} from "react-hook-form";
import {useState} from "react";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../recoil/user/atoms";
import {useMutation, useQueryClient} from "react-query";
import {authDeleteApi, authPatchApi} from "../apis/api/user";
import {API_URLS} from "../apis/constants/urls";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {useLocation} from "react-router-dom";

export const useReviewForm = (review) => {
    const queryClient = useQueryClient()
    const [updateMode, setUpdateMode] = useState(false)
    const {userId, role} = useRecoilValue(userInfoState)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page') || 1;
    const GET_MY_REVIEWS_URL = API_URLS.GET_MY_REVIEWS(page)

    const {handleSubmit, register, watch, getValues, setValue}
        = useForm();

    const {mutate: deleteReview, isLoading: isDeleting} = useMutation(
        () => authDeleteApi(API_URLS.DELETE_MY_REVIEW(review.reviewId)), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([GET_MY_REVIEWS_URL, QUERY_KEYS.REVIEWS]);
                alert("리뷰가 삭제되었습니다")
            },
            onError: (error) => {
                console.error('Review deletion failed:', error);
            }
        });

    const {mutate: updateReview, isLoading: isUpdating} = useMutation(
        () => authPatchApi(API_URLS.PATCH_MY_REVIEW(review.reviewId), getValues()), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([GET_MY_REVIEWS_URL, QUERY_KEYS.REVIEWS]);
                alert("리뷰가 수정되었습니다")
            },
            onError: (error) => {
                console.error('Review deletion failed:', error);
            }
        });


    return {
        updateMode,
        isMyReview: userId === review.userId && location.pathname.includes("users"),
        deleteReview,
        isDeleting,
        updateReview,
        isUpdating,
        handleRatingChange: (newRating) => {
            setValue("rating", newRating);
        },
        setUpdateMode: () => {
            setValue("rating", review.rating);
            setValue("content", review.content);
            setValue("img", review.img)
            setUpdateMode(true)
        },
        cancelUpdateMode: () => setUpdateMode(false),
        register,
        getValues,
        setValue,
        watch,
        isOwner: role === "owner" && location.pathname.includes("owners"),
        handleSubmit
    };
};
