import { useQuery } from "react-query";
import { authGetApi } from "../../../../api/request";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../../../../constants/urls";
import { pageCalculator } from "../../../../utils/calculator";
import useCustomQueryParams from "../../../../common-hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "../../../../constants/queryParamsInit";

export const useGetMyReviews = () => {
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    QUERY_KEYS.MY_REVIEWS(page),
    () => authGetApi(API_URLS.USER.REVIEWS, { params: { page } }),
    {
      select: (res) => {
        return {
          reviews: res.data?.reviewList,
          totalPages: pageCalculator(res.data.totalItems),
        };
      },
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    }
  );

  return {
    reviews: data?.reviews || [],
    totalPages: data?.totalPages,
    isLoading,
    page,
    setPage: (newPage) => navigate(`users/me/reviews?page=${newPage}`),
  };
};
export default useGetMyReviews;
