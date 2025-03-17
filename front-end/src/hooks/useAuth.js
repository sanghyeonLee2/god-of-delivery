import {useQuery} from "react-query";
import {authGetApi} from "../apis/api/user";
import {API_URLS} from "../apis/constants/urls";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {useSetRecoilState} from "recoil";
import {userInfoState} from "../recoil/user/atoms";

export const useAuth = () => {
    const setUserInfo = useSetRecoilState(userInfoState)
    const accessToken = localStorage.getItem("access-token");
    const {isLoading} = useQuery(
        [QUERY_KEYS.ME, API_URLS.GET_ME],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => authGetApi(API_URLS.GET_ME),
        {
            enabled: !!accessToken,
            staleTime: 5 * 60 * 1000,  // 5분 동안은 fresh한 데이터로 간주
            cacheTime: 30 * 60 * 1000, // 30분 동안 캐시 유지
            onSuccess: (res) => {
                setUserInfo(res.data);
            },
            retry: false,
        }
    );
    return isLoading;
}

export default useAuth
