import { useQuery } from "react-query";
import { authGetApi } from "../api/request";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../constants/queryKeys";
import { API_URLS } from "../constants/urls";
import { pageCalculator } from "../utils/calculator";
import useCustomQueryParams from "./useCustomQueryParams";
import QUERY_PARAMS_INIT from "../constants/queryParamsInit";

const useGetOrders = () => {
  const navigate = useNavigate();
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);

  const { data, isError, status, isLoading } = useQuery(
    QUERY_KEYS.ORDERS(page),
    () =>
      authGetApi(API_URLS.USER.ORDERS, {
        params: {
          page,
        },
      }),
    {
      select: (res) => ({
        userOrderList: res.data.userOrderList,
        totalPages: pageCalculator(res.data.totalItems),
      }),
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
    }
  );

  const setPage = (newPage) => {
    navigate(`?page=${newPage}`);
  };

  return {
    ordersData: data?.userOrderList || [],
    totalPages: data?.totalPages,
    isError,
    status,
    isLoading,
    page,
    setPage,
  };
};
export default useGetOrders;
