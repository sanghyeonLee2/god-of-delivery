import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi, authPostApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { QUERY_KEYS } from "@constants/queryKeys";
import { showSuccess } from "@utils/toasts";
import { SUCCESS_MESSAGES } from "@constants/messages";

export const useDibs = (storeId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (isDib = true) =>
      isDib
        ? await authDeleteApi(API_URLS.DIB.DELETE(storeId))
        : await authPostApi(API_URLS.DIB.POST, { storeId }),
    {
      onSuccess: async (res) => {
        if (res.data.message === "Success") {
          showSuccess(SUCCESS_MESSAGES.WISHLIST_ADDED);
        }
        if (res.data.message === "Delete") {
          showSuccess(SUCCESS_MESSAGES.WISHLIST_DELETED);
        }
        await queryClient.invalidateQueries(QUERY_KEYS.STORE_DETAIL(storeId));
        await queryClient.invalidateQueries(QUERY_KEYS.DIBS(1));
      },
    }
  );
};
