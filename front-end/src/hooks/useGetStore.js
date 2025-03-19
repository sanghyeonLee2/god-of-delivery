import {useQuery} from "react-query";
import {getApi} from "../api/user";
import {useParams} from "react-router-dom";
import {QUERY_KEYS} from "../constants/queryKeys";
import {API_URLS} from "../constants/urls";

export const useGetStore = () => { // 가게 정보 불러오는 커스텀훅을 만들고 주소 설정했을때 queryClient 뭐 삭제해서 다시 받아오게
    const {storeId} = useParams();
    const GET_STORE_URL = API_URLS.GET_STORE(storeId)
    const {data, isLoading} = useQuery(
        [QUERY_KEYS.STORE, GET_STORE_URL],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(GET_STORE_URL),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );
    return {storeData: data?.data, isLoading};
}
export default useGetStore
