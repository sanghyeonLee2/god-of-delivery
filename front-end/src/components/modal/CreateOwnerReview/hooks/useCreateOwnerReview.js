import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { authPostApi } from "../../../../api/request";
import { API_URLS } from "../../../../constants/urls";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../../recoil/flag/atoms";
import { showSuccess } from "../../../../utils/toasts";
import useCustomQueryParams from "../../../../common-hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "../../../../constants/queryParamsInit";
import { QUERY_KEYS } from "../../../../constants/queryKeys";

export const useCreateOwnerReview = (reviewId) => {
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const queryClient = useQueryClient();
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
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
        showSuccess("리뷰가 추가 되었습니다");
        await queryClient.invalidateQueries(QUERY_KEYS.OWNER_STORE_REVIEWS(page));
        setIsModalOpen({ modalType: "", flag: false, modalData: null });
      },
    }
  );

  return {
    register,
    createOwnerReview,
    isCreatingOwnerReview,
  };
};
