import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { QUERY_KEYS } from "@constants/queryKeys";
import useCustomQueryParams from "../../../../hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "../../../../constants/queryParamsInit";
import { showSuccess } from "@utils/toasts";
import { useLocation } from "react-router-dom";

const useDeleteMyDibs = () => {
  const location = useLocation();
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const queryClient = useQueryClient();
  const { mutate: deleteDibs } = useMutation(
    async (storeId) => await authDeleteApi(API_URLS.DIB.DELETE(storeId)),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.DIBS(page));
        showSuccess("찜 목록에서 삭제 되었습니다");
      },
    }
  );
  return { deleteDibs, isDibsPage: location.pathname.includes("/dibs") };
};
export default useDeleteMyDibs;
