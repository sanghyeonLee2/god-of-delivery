import { useQuery } from "react-query";
import { authGetApi } from "@api/request";
import { QUERY_KEYS } from "@constants/queryKeys";
import { API_URLS } from "@constants/urls";
import { useNavigate, useParams } from "react-router-dom";

export const useGetOrder = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(QUERY_KEYS.ORDER, () =>
    authGetApi(API_URLS.ORDER.DETAIL(orderId))
  );
  return {
    orderData: data?.data,
    isLoading,
    navigateOrders: () => navigate("/orders"),
  };
};
