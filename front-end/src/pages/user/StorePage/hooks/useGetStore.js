import { useQuery } from "react-query";
import { authGetApi } from "../../../../api/request";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { API_URLS } from "../../../../constants/urls";
import useCustomParams from "../../../../common-hooks/useCustomParams";

export const useGetStore = () => {
  const { storeId } = useCustomParams();
  const { data, isLoading } = useQuery(
    QUERY_KEYS.STORE_DETAIL(storeId),
    () => authGetApi(API_URLS.STORE.DETAIL(storeId)),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
    }
  );
  return { storeData: data?.data, isLoading };
};
export default useGetStore;
