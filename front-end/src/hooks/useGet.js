import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";

export const useGet = (url) => {
    const {data, isError, status, isLoading} = useQuery(
        ["getData", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(url), // queryFn
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );
    return {data: data?.data, isError, status, isLoading};
}
export default useGet

/*
export const useAuthGet = (url) => {
    const isSignIn = useRecoilValue(isSignInState)
    const {data, isError, status, isLoading} = useQuery(
        ["getData", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getAuthApi(url), // queryFn
        {enabled: isSignIn}
    );
    console.log(isSignIn)
    return [data, isError, status, isLoading];
}
*/
