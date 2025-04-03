import { useQuery } from "react-query";
import { authGetApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { QUERY_KEYS } from "@constants/queryKeys";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSignInState, userInfoState } from "@recoil/user/atoms";

export const useAuth = () => {
  const setUserInfo = useSetRecoilState(userInfoState);
  const isSignIn = useRecoilValue(isSignInState);
  const accessToken = localStorage.getItem("access-token");
  const { data, isLoading } = useQuery(QUERY_KEYS.ME, () => authGetApi(API_URLS.USER.ME), {
    enabled: isSignIn && !!accessToken,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    onSuccess: (res) => setUserInfo(res.data),
  });
  return { isLoading, isSignIn, role: data?.data.role };
};

export default useAuth;
