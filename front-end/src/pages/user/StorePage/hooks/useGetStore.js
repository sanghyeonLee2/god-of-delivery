import { useQuery } from "react-query";
import { authGetApi } from "@api/request";
import { QUERY_KEYS } from "@constants/queryKeys";
import { API_URLS } from "@constants/urls";
import useCustomParams from "@hooks/useCustomParams";

export const useGetStore = () => {
  const { storeId } = useCustomParams();
  const { data, isLoading } = useQuery(QUERY_KEYS.STORE_DETAIL(storeId), () =>
    authGetApi(API_URLS.STORE.DETAIL(storeId))
  );
  return { storeData: data?.data, isLoading };
};
export default useGetStore;
