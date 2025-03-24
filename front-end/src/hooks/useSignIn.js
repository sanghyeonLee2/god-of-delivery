import { useMutation, useQueryClient } from "react-query";
import { postApi } from "../api/request";
import { API_URLS } from "../constants/urls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInValid } from "../validation/userSchema";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isSignInState } from "../recoil/user/atoms";
import { showSuccess } from "../utils/toasts";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setSignIn = useSetRecoilState(isSignInState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValid),
    mode: "onBlur",
  });
  const { mutate: handleSignIn, isLoading: isLoggingIn } = useMutation(
    (data = {}) => postApi(API_URLS.AUTH.SIGN_IN, data),
    {
      onSuccess: (res) => {
        showSuccess("로그인에 성공 했습니다");
        queryClient.clear();
        const { accessToken, refreshToken } = res.data;
        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("refresh-token", refreshToken);
        setSignIn(true);
        navigate("/");
      },
    }
  );

  return { register, handleSubmit, handleSignIn, isLoggingIn, errors };
};
