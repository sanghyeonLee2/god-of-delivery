import { useQuery } from "react-query";
import { authGetApi } from "@api/request";
import { QUERY_KEYS } from "@constants/queryKeys";
import { API_URLS } from "@constants/urls";
import { useNavigate, useParams } from "react-router-dom";

export const useGetOrder = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    QUERY_KEYS.ORDER,
    () => authGetApi(API_URLS.ORDER.DETAIL(orderId)),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지,
    }
  );
  return {
    orderData: data?.data,
    isLoading,
    navigateOrders: () => navigate("/orders"),
  };
};
