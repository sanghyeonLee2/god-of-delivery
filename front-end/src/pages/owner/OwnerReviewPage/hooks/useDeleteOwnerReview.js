import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi } from "../../../../api/request";
import { API_URLS } from "../../../../constants/urls";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { showSuccess } from "../../../../utils/toasts";
import useCustomQueryParams from "../../../../common-hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "../../../../constants/queryParamsInit";

export const useDeleteOwnerReview = () => {
  const queryClient = useQueryClient();
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);

  return useMutation((reviewId) => authDeleteApi(API_URLS.REVIEW.OWNER.ITEM(reviewId)), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.OWNER_STORE_REVIEWS(page));
      showSuccess("리뷰가 삭제되었습니다");
    },
  });
};
