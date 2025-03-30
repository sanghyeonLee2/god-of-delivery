import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { authPostApi } from "../../../../api/request";
import { API_URLS } from "../../../../constants/urls";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../../recoil/flag/atoms";
import { showSuccess } from "../../../../utils/toasts";
import useCustomQueryParams from "../../../../common-hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "../../../../constants/queryParamsInit";

export const useCreateReview = ({ orderId, storeId }) => {
  const queryClient = useQueryClient();
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
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
        showSuccess("리뷰가 추가 되었습니다");
        setIsModalOpen({ modalType: "", flag: false, modalData: null });
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
