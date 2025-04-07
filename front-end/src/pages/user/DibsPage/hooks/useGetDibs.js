import { useQuery } from "react-query";
import { authGetApi } from "@api/request";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@constants/queryKeys";
import { API_URLS } from "@constants/urls";
import { pageCalculator } from "@utils/calculator";
import useCustomQueryParams from "@hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "@constants/queryParamsInit";

export const useGetDibs = () => {
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    QUERY_KEYS.DIBS(page),
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
    }
  );
  return {
    totalPages: data?.totalPages,
    dibList: data?.dibList,
    page,
    setPage: (newPage) => navigate(`?page=${newPage}`),
    isLoading,
  };
};
export default useGetDibs;
