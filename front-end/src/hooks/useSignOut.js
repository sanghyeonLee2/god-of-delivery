import {useSetRecoilState} from "recoil";
import {isSignInState} from "../recoil/user/atoms";
import {useNavigate} from "react-router-dom";

const useSignOut = () => {
    const navigate = useNavigate();
    const setIsSignIn = useSetRecoilState(isSignInState)
    return () => {
        localStorage.removeItem("access-token")
        localStorage.removeItem("refresh-token")
        setIsSignIn(false)
        navigate("/")
    };
}

export default useSignOut;