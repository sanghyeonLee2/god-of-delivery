import {useMutation, useQueryClient} from "react-query";
import {authDeleteApi, authPostApi} from "../api/user";
import {API_URLS} from "../constants/urls";
import {QUERY_KEYS} from "../constants/queryKeys";
import {showSuccess} from "../utils/toasts";

export const useDibs = () => {
    const queryClient = useQueryClient();

    return useMutation(
        async ({storeId, isDib}) =>
            isDib ? await authDeleteApi(API_URLS.DELETE_DIB(storeId)) : await authPostApi(API_URLS.POST_DIB, {storeId})
        ,
        {
            onMutate: async ({storeId}) => {
                const GET_STORE_URL = API_URLS.GET_STORE(storeId)
                const previousStoreData = queryClient.getQueryData([QUERY_KEYS.STORE, GET_STORE_URL]);
                queryClient.setQueryData([QUERY_KEYS.STORE, GET_STORE_URL], (oldData) => {
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
                        }
                    };
                });
                return {previousStoreData};
            },
            onSuccess:
                (res) => {
                    if (res.data.message === "Success") {
                        showSuccess("찜 목록에 추가 되었습니다.")
                    }
                    if (res.data.message === "Delete") {
                        showSuccess("찜 목록에서 삭제 되었습니다.")
                    }
                },
            onError:
                (err, variables, context) => {
                    if (context?.previousStoreData) {
                        const GET_STORE_URL = API_URLS.GET_STORE(variables.storeId)
                        queryClient.setQueryData([QUERY_KEYS.STORE, GET_STORE_URL], context.previousStoreData);
                    }
                },
            onSettled:
                async (data, err, variables) => {
                    const GET_STORE_URL = API_URLS.GET_STORE(variables.storeId)
                    await queryClient.invalidateQueries([QUERY_KEYS.STORE, GET_STORE_URL]);
                },
        }
    )
};
