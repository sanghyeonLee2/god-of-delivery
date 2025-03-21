import { useQuery } from "react-query";
import {authGetApi, getApi} from "../api/user";
import { useState } from "react";
import { QUERY_KEYS } from "../constants/queryKeys";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_URLS } from "../constants/urls";
import { pageCalculator } from "../utils/calculator";

export const useGetReviews = (reviewType) => {
  const [storeReviewsCurrentPage, setStoreReviewsCurrentPage] = useState(1);
  const { storeId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const reviewPageParams = queryParams.get("page") || 1;
  const navigate = useNavigate();
  const setMyReviewsCurrentPage = (newPage) =>
    navigate(`users/me/reviews?page=${newPage}`);

  const GET_REVIEWS_URL = () => {
    if (reviewType === "storeReviews")
      return API_URLS.GET_STORE_REVIEWS(storeId, storeReviewsCurrentPage);
    if (reviewType === "myReviews")
      return API_URLS.GET_MY_REVIEWS(reviewPageParams);
    return API_URLS.GET_OWNER_REVIEWS(reviewPageParams);
  };

  const { data, isLoading } = useQuery(
    [GET_REVIEWS_URL(), QUERY_KEYS.REVIEWS],
    () => authGetApi(GET_REVIEWS_URL()),
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
    reviews: data?.reviews,
    totalPages: data?.totalPages,
    reviewStat: data?.reviewStat,
    isLoading,
    page: storeId ? storeReviewsCurrentPage : parseInt(reviewPageParams, 10),
    setPage: storeId ? setStoreReviewsCurrentPage : setMyReviewsCurrentPage,
  };
};
export default useGetReviews;
