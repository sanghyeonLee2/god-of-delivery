import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { authPostApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { QUERY_KEYS } from "@constants/queryKeys";
import { showSuccess } from "@utils/toasts";
import useCustomQueryParams from "../../../../hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "../../../../constants/queryParamsInit";
import useCloseModal from "@hooks/useCloseModal";
import { SUCCESS_MESSAGES } from "@constants/messages";

export const useCreateReview = ({ orderId, storeId }) => {
  const queryClient = useQueryClient();
  const closeModal = useCloseModal();
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const { handleSubmit, watch, register, setValue } = useForm({
    defaultValues: {
      orderId,
      storeId,
      rating: 5,
      content: "",
    },
  });

  const { mutate: handleCreateReview, isLoading: isCreatingReview } = useMutation(
    (data = {}) => authPostApi(API_URLS.REVIEW.POST, data),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.ORDERS(page));
        showSuccess(SUCCESS_MESSAGES.REVIEW_ADDED);
        closeModal();
      },
    }
  );

  const handleRatingChange = (newRating) => {
    setValue("rating", newRating);
  };

  return {
    form: { register, handleRatingChange, handleSubmit, watch },
    mutation: { handleCreateReview, isCreatingReview },
  };
};
export default useCreateReview;
