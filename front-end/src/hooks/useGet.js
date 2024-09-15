import {useQuery} from "react-query";
import {getApi, getAuthApi} from "../apis/api/user";
import {useRecoilValue} from "recoil";
import {isSignInState} from "../recoil/user/atoms";

export const useGet = (url) => {
    const {data, isError, status, isLoading} = useQuery(
        ["getData", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(url), // queryFn
    );
    return [data, isError, status, isLoading];
}
export default useGet

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
