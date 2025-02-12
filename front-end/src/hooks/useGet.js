import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";

export const useGet = (url) => { // 가게 정보 불러오는 커스텀훅을 만들고 주소 설정했을때 queryClient 뭐 삭제해서 다시 받아오게 
    const {data, isError, isLoading} = useQuery(
        ["getData", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(url),
        {
            /* onSuccess: data => console.log(data),*/
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );
    return {data: data?.data, isError, isLoading};
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
