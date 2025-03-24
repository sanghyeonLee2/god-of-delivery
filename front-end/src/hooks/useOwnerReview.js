import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi, authPatchApi } from "../api/request";
import { API_URLS } from "../constants/urls";
import { QUERY_KEYS } from "../constants/queryKeys";
import { showSuccess } from "../utils/toasts";
import useCustomQueryParams from "./useCustomQueryParams";
import QUERY_PARAMS_INIT from "../constants/queryParamsInit";

export const useOwnerReview = (ownerReview) => {
  const queryClient = useQueryClient();
  const [updateMode, setUpdateMode] = useState(false);
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const { handleSubmit, register } = useForm();

  const { mutate: deleteReview, isLoading: isDeleting } = useMutation(
    () => authDeleteApi(API_URLS.REVIEW.OWNER.ITEM(ownerReview.id)),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.REVIEWS(page));
        showSuccess("리뷰가 삭제되었습니다");
      },
    }
  );

  const { mutate: updateReview, isLoading: isUpdating } = useMutation(
    () => authPatchApi(API_URLS.REVIEW.OWNER.ITEM(ownerReview.id), ownerReview),
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
    setUpdateMode: () => setUpdateMode(true),
    cancelUpdateMode: () => setUpdateMode(false),
    register,
    deleteReview,
    updateReview,
    handleSubmit,
  };
};
