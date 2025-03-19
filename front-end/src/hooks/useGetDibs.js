import {useQuery} from "react-query";
import {getApi} from "../api/user";
import {useLocation, useNavigate} from "react-router-dom";
import {QUERY_KEYS} from "../constants/queryKeys";
import {API_URLS} from "../constants/urls";
import {pageCalculator} from "../utils/calculator";

export const useGetDibs = () => { // 가게 정보 불러오는 커스텀훅을 만들고 주소 설정했을때 queryClient 뭐 삭제해서 다시 받아오게
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate()
    const page = queryParams.get('page') || 1;
    const GET_DIBS_URL = API_URLS.GET_DIBS(page)
    const {data, isLoading} = useQuery(
        [QUERY_KEYS.DIBS, GET_DIBS_URL],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(GET_DIBS_URL),
        {
            select: (res) =>
                ({
                    storesData: res.data?.storeList,
                    totalPages: pageCalculator(res.data.totalItems, res.data.pageSize),
                }),
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );
    return {
        totalPages: data?.totalPages,
        storesData: data?.storesData,
        page: parseInt(page, 10),
        setPage: (newPage) => navigate(`?page=${newPage}`),
        isLoading
    };
}
export default useGetDibs
