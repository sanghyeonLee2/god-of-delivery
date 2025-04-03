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
    onSuccess: (res) => setUserInfo(res.data),
  });
  const isAuthorized = isSignIn && !!data?.data.role && !!accessToken;

  return { isLoading, role: data?.data.role, isAuthorized };
};

export default useAuth;
