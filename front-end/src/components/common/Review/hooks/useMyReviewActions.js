import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi, authPatchApi } from "../../../../api/request";
import { API_URLS } from "../../../../constants/urls";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { showSuccess } from "../../../../utils/toasts";
import useCustomQueryParams from "../../../../common-hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "../../../../constants/queryParamsInit";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useMyReviewActions = (rating, content) => {
  const [updateMode, setUpdateMode] = useState(false);
  const queryClient = useQueryClient();
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const { control, register, watch, getValues, setValue } = useForm({
    defaultValues: {
      rating,
      content,
    },
  });
  const { mutate: updateReview } = useMutation(
    (reviewId) => authPatchApi(API_URLS.REVIEW.MY(reviewId), getValues()),
    {
      onSuccess: async () => {
        setUpdateMode(false);
        await queryClient.invalidateQueries(QUERY_KEYS.MY_REVIEWS(page));
        showSuccess("리뷰가 수정되었습니다");
      },
    }
  );
  const { mutate: deleteReview } = useMutation(
    (reviewId) => authDeleteApi(API_URLS.REVIEW.MY(reviewId)),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.MY_REVIEWS(page));
        showSuccess("리뷰가 삭제되었습니다");
      },
    }
  );
  return {
    form: {
      register,
      watch,
      setValue,
      control,
      handleRatingChange: (newRating) => {
        setValue("rating", newRating);
      },
    },
    deleteReview,
    updateReview,
    updateMode,
    setUpdateMode: () => setUpdateMode(true),
    cancelUpdateMode: () => setUpdateMode(false),
  };
};

export default useMyReviewActions;
