import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../recoil/user/atoms";
import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi, authPatchApi } from "../api/request";
import { API_URLS } from "../constants/urls";
import { QUERY_KEYS } from "../constants/queryKeys";
import { useLocation } from "react-router-dom";
import { showSuccess } from "../utils/toasts";
import useCustomQueryParams from "./useCustomQueryParams";
import QUERY_PARAMS_INIT from "../constants/queryParamsInit";

export const useReviewForm = (review) => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const [updateMode, setUpdateMode] = useState(false);
  const { userId, role } = useRecoilValue(userInfoState);
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);

  const { handleSubmit, register, watch, getValues, setValue } = useForm();

  const { mutate: deleteReview } = useMutation(
    () =>
      authDeleteApi(API_URLS.REVIEW.MY(review.reviewId), {
        params: {
          page,
        },
      }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.REVIEWS(page));
        showSuccess("리뷰가 삭제되었습니다");
      },
    }
  );

  const { mutate: updateReview } = useMutation(
    () =>
      authPatchApi(API_URLS.REVIEW.MY(review.reviewId), getValues(), {
        params: {
          page,
        },
      }),
    {
      onSuccess: async () => {
        setUpdateMode(false);
        await queryClient.invalidateQueries(QUERY_KEYS.REVIEWS(page));
        showSuccess("리뷰가 수정되었습니다");
      },
    }
  );

  return {
    updateMode,
    isMyReview: userId === review.userId && location.pathname.includes("users"),
    deleteReview,
    updateReview,
    handleRatingChange: (newRating) => {
      setValue("rating", newRating);
    },
    setUpdateMode: () => {
      setValue("rating", review.rating);
      setValue("content", review.content);
      setValue("img", review.img);
      setUpdateMode(true);
    },
    cancelUpdateMode: () => setUpdateMode(false),
    register,
    getValues,
    setValue,
    watch,
    isOwner: role === "owner" && location.pathname.includes("owners"),
    handleSubmit,
  };
};
