import {useSetRecoilState} from "recoil";
import {isSignInState} from "../recoil/user/atoms";
import {useNavigate} from "react-router-dom";
import {useQueryClient} from "react-query";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {API_URLS} from "../apis/constants/urls";

const useSignOut = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const setIsSignIn = useSetRecoilState(isSignInState)
    return async () => {
        localStorage.removeItem("access-token")
        localStorage.removeItem("refresh-token")
        await queryClient.removeQueries([QUERY_KEYS.ME, API_URLS.GET_ME])
        setIsSignIn(false)
        navigate("/")
    };
}

export default useSignOut;