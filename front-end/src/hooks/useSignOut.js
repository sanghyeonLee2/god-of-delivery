import {useSetRecoilState} from "recoil";
import {isSignInState} from "../recoil/user/atoms";
import {useNavigate} from "react-router-dom";
import {useQueryClient} from "react-query";
import {QUERY_KEYS} from "../constants/queryKeys";
import {API_URLS} from "../constants/urls";
import {showSuccess} from "../utils/toasts";

const useSignOut = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const setIsSignIn = useSetRecoilState(isSignInState)
    return async () => {
        showSuccess("로그아웃 되었습니다")
        localStorage.removeItem("access-token")
        localStorage.removeItem("refresh-token")
        await queryClient.removeQueries([QUERY_KEYS.ME, API_URLS.GET_ME])
        setIsSignIn(false)
        navigate("/")
    };
}

export default useSignOut;