import { useQuery } from "react-query";
import { authGetApi } from "../api/request";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../constants/queryKeys";
import { API_URLS } from "../constants/urls";
import { pageCalculator } from "../utils/calculator";
import useCustomQueryParams from "./useCustomQueryParams";
import QUERY_PARAMS_INIT from "../constants/queryParamsInit";

export const useGetDibs = () => {
  // 가게 정보 불러오는 커스텀훅을 만들고 주소 설정했을때 queryClient 뭐 삭제해서 다시 받아오게
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    QUERY_KEYS.DIBS, // 쿼리 키를 고유하게 만들기 위해 url 포함
    () =>
      authGetApi(API_URLS.USER.DIBS, {
        params: {
          page,
        },
      }),
    {
      select: (res) => ({
        dibList: res.data?.dibList,
        totalPages: pageCalculator(res.data.totalItems),
      }),
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
    }
  );
  return {
    totalPages: data?.totalPages,
    dibList: data?.dibList || [],
    page,
    setPage: (newPage) => navigate(`?page=${newPage}`),
    isLoading,
  };
};
export default useGetDibs;
