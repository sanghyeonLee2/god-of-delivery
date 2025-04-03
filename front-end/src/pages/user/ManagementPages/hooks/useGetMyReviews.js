import { useQuery } from "react-query";
import { authGetApi } from "@api/request";
import { QUERY_KEYS } from "@constants/queryKeys";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "@constants/urls";
import { pageCalculator } from "@utils/calculator";
import useCustomQueryParams from "@hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "@constants/queryParamsInit";

export const useGetMyReviews = () => {
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    QUERY_KEYS.MY_REVIEWS(page),
    () => authGetApi(API_URLS.USER.REVIEWS, { params: { page } }),
    {
      select: (res) => ({
        reviews: res.data?.reviewList,
        totalPages: pageCalculator(res.data.totalItems),
      }),
    }
  );

  return {
    reviews: data?.reviews || [],
    totalPages: data?.totalPages,
    isLoading,
    page,
    setPage: (newPage) => navigate(`?page=${newPage}`),
  };
};
export default useGetMyReviews;
