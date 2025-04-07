import { useQuery } from "react-query";
import { authGetApi } from "@api/request";
import { useState } from "react";
import { QUERY_KEYS } from "@constants/queryKeys";
import { API_URLS } from "@constants/urls";
import { pageCalculator } from "@utils/calculator";
import useCustomParams from "@hooks/useCustomParams";

export const useGetStoreReviews = () => {
  const [page, setPage] = useState(1);
  const { storeId } = useCustomParams();

  const { data, isLoading } = useQuery(
    QUERY_KEYS.STORE_REVIEWS(storeId, page),
    () => authGetApi(API_URLS.STORE.REVIEWS(storeId), { params: { page } }),
    {
      select: (res) => ({
        reviews: res.data?.reviewList,
        reviewStat: res.data?.reviewStat,
        totalPages: pageCalculator(res.data.totalItems),
      }),
    }
  );

  return {
    reviews: data?.reviews,
    totalPages: data?.totalPages,
    reviewStat: data?.reviewStat,
    isLoading,
    page,
    setPage,
  };
};
export default useGetStoreReviews;
