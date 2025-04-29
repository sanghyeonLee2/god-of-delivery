import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { authPostApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { showSuccess } from "@utils/toasts";
import { QUERY_KEYS } from "@constants/queryKeys";
import useCustomQueryParams from "@hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "@constants/queryParamsInit";
import useCloseModal from "@hooks/useCloseModal";
import { SUCCESS_MESSAGES } from "@constants/messages";

export const useCreateOwnerReview = (reviewId) => {
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const queryClient = useQueryClient();
  const closeModal = useCloseModal();
  const { register, getValues } = useForm({
    defaultValues: {
      content: "",
      reviewId,
    },
  });

  const { mutate: createOwnerReview, isLoading: isCreatingOwnerReview } = useMutation(
    () => authPostApi(API_URLS.REVIEW.OWNER.BASE, { ...getValues(), reviewId }),
    {
      onSuccess: async () => {
        showSuccess(SUCCESS_MESSAGES.REVIEW_ADDED);
        await queryClient.invalidateQueries(QUERY_KEYS.OWNER_STORE_REVIEWS(page));
        closeModal();
      },
    }
  );

  return {
    register,
    createOwnerReview,
    isCreatingOwnerReview,
  };
};
