import {useQuery} from "react-query";
import {getUserApi} from "../apis/api/user";

const useGet = (url) => {

    const {data, isError, refetch, status} = useQuery(
        ["getData", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getUserApi(url), // queryFn
        {
            enabled: false,
            staleTime: 0,    // 데이터를 항상 신선하다고 간주하지 않음
            cacheTime: 0,    // 캐시된 데이터를 유지하지 않음
        }
    );
    return [data, isError, refetch, status];
}
export default useGet