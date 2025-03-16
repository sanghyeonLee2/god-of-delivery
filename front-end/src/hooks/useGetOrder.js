import {useQuery} from "react-query";
import {authGetApi} from "../apis/api/user";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {API_URLS} from "../apis/constants/urls";
import {useNavigate, useParams} from "react-router-dom";


export const useGetOrder = () => {
    const {orderId} = useParams();
    const GET_ORDER_URL = API_URLS.GET_ORDER(orderId)

    const navigate = useNavigate();
    const {data, isLoading} = useQuery(
        [QUERY_KEYS.ORDER, GET_ORDER_URL],
        () => authGetApi(GET_ORDER_URL),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지,
        }
    );
    return {
        orderData: data?.data,
        isLoading,
        navigateOrders: () => navigate("/users/me/orders?page=1"),
    };
};
