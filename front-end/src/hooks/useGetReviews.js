import { useQuery } from "react-query";
import { authGetApi } from "../api/request";
import { useState } from "react";
import { QUERY_KEYS } from "../constants/queryKeys";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../constants/urls";
import { pageCalculator } from "../utils/calculator";
import useCustomQueryParams from "./useCustomQueryParams";
import useCustomParams from "./useCustomParams";
import QUERY_PARAMS_INIT from "../constants/queryParamsInit";

export const useGetReviews = (reviewType) => {
  const [storeReviewsCurrentPage, setStoreReviewsCurrentPage] = useState(1);
  const { storeId } = useCustomParams();
  const { page } = useCustomQueryParams(QUERY_PARAMS_INIT.ONLY_PAGE);
  const navigate = useNavigate();

  const GET_REVIEWS_URL = () => {
    if (reviewType === "storeReviews") return API_URLS.STORE.REVIEWS(storeId);
    if (reviewType === "myReviews") return API_URLS.USER.REVIEWS;
    return API_URLS.REVIEW.OWNER;
  };

  const { data, isLoading } = useQuery(
    QUERY_KEYS.STORE_REVIEWS(storeId, page),
    () => authGetApi(GET_REVIEWS_URL(), { params: { page } }),
    {
      select: (res) => {
        return {
          reviews: res.data?.reviewList,
          reviewStat: res.data?.reviewStat,
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
    reviewStat: data?.reviewStat,
    isLoading,
    page: storeId ? storeReviewsCurrentPage : page,
    setPage: storeId
      ? setStoreReviewsCurrentPage
      : (newPage) => navigate(`users/me/reviews?page=${newPage}`),
  };
};
export default useGetReviews;
