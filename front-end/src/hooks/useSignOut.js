import { useSetRecoilState } from "recoil";
import { isSignInState } from "@recoil/user/atoms";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { showSuccess } from "@utils/toasts";
import { SUCCESS_MESSAGES } from "@constants/messages";

const useSignOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setIsSignIn = useSetRecoilState(isSignInState);
  return () => {
    showSuccess(SUCCESS_MESSAGES.LOGOUT_SUCCESS);
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    queryClient.clear();
    setIsSignIn(false);
    navigate("/auth/sign-in", { replace: true });
  };
};

export default useSignOut;
