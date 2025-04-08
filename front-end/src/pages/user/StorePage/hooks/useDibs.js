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
      onMutate: async () => {
        const previousStoreData = queryClient.getQueryData(QUERY_KEYS.STORE_DETAIL(storeId));
        queryClient.setQueryData(QUERY_KEYS.STORE_DETAIL(storeId), (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            data: {
              ...oldData.data,
              storeHeader: {
                ...oldData.data.storeHeader,
                isDib: !oldData.data.storeHeader.isDib,
                dibs: oldData.data.storeHeader.isDib
                  ? oldData.data.storeHeader.dibs - 1
                  : oldData.data.storeHeader.dibs + 1,
              },
            },
          };
        });
        return { previousStoreData };
      },
      onSuccess: async (res) => {
        await queryClient.invalidateQueries(QUERY_KEYS.DIBS(1));
        if (res.data.message === "Success") {
          showSuccess(SUCCESS_MESSAGES.WISHLIST_ADDED);
        }
        if (res.data.message === "Delete") {
          showSuccess(SUCCESS_MESSAGES.WISHLIST_DELETED);
        }
      },
      onError: (err, variables, context) => {
        if (context?.previousStoreData) {
          queryClient.setQueryData(QUERY_KEYS.STORE_DETAIL(storeId), context.previousStoreData);
        }
      },
      onSettled: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.STORE_DETAIL(storeId));
      },
    }
  );
};
