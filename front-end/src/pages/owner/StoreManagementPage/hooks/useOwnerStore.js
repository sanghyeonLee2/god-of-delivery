import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPutApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { showSuccess } from "@utils/toasts";
import { QUERY_KEYS } from "@constants/queryKeys";

export const useOwnerStore = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    QUERY_KEYS.OWNER_STORES,
    () => authGetApi(API_URLS.STORE.OWNER_STORE),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
    }
  );

  const { register, getValues, handleSubmit } = useForm();

  const { mutate: updateStore, isLoading: isUpdating } = useMutation(
    () => authPutApi(API_URLS.STORE.OWNER_STORE, getValues()),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.OWNER_STORES);
        showSuccess("가게 정보를 수정했습니다");
      },
    }
  );

  return {
    storeData: data?.data,
    isUpdating,
    handleSubmit: handleSubmit(() => updateStore()),
    isLoading,
    register,
  };
};
