import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPutApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { showSuccess } from "@utils/toasts";
import { QUERY_KEYS } from "@constants/queryKeys";
import { SUCCESS_MESSAGES } from "@constants/messages";

export const useOwnerStore = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(QUERY_KEYS.OWNER_STORES, () =>
    authGetApi(API_URLS.STORE.OWNER_STORE)
  );

  const { register, getValues, handleSubmit } = useForm();

  const { mutate: updateStore, isLoading: isUpdating } = useMutation(
    () => authPutApi(API_URLS.STORE.OWNER_STORE, getValues()),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.OWNER_STORES);
        showSuccess(SUCCESS_MESSAGES.STORE_UPDATED);
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
