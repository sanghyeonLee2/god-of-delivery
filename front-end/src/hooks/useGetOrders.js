import {useQuery} from "react-query";
import {authGetApi} from "../apis/api/user";
import {useLocation, useNavigate} from "react-router-dom";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {API_URLS} from "../apis/constants/urls";
import {pageCalculator} from "../utils/calculator";

const useGetOrders = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page') || 1;

    const GET_ORDERS_URL = API_URLS.GET_ORDERS(page)
    const {data, isError, status, isLoading} = useQuery(
        [QUERY_KEYS.ORDERS, GET_ORDERS_URL],
        () => authGetApi(GET_ORDERS_URL),
        {
            select: (res) => ({
                userOrderList: res.data.userOrderList,
                totalPages: pageCalculator(res.data.totalItems, res.data.pageSize),
            }),
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );

    const setPage = (newPage) => {
        navigate(`?page=${newPage}`);
    };

    return {
        ordersData: data?.userOrderList,
        totalPages: data?.totalPages,
        isError,
        status,
        isLoading,
        page: parseInt(page, 10),
        setPage
    };
}
export default useGetOrders