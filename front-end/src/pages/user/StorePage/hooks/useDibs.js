import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi, authPostApi } from "../../../../api/request";
import { API_URLS } from "../../../../constants/urls";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { showSuccess } from "../../../../utils/toasts";

export const useDibs = (storeId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (isDib) =>
      isDib
        ? await authDeleteApi(API_URLS.DIB.DELETE(storeId))
        : await authPostApi(API_URLS.DIB.POST, { storeId }),
    {
      onMutate: async ({ storeId }) => {
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
        await queryClient.invalidateQueries(QUERY_KEYS.DIBS);
        if (res.data.message === "Success") {
          showSuccess("찜 목록에 추가 되었습니다.");
        }
        if (res.data.message === "Delete") {
          showSuccess("찜 목록에서 삭제 되었습니다.");
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
