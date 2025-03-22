import { useMutation } from "react-query";
import { postApi } from "../api/user";
import { API_URLS } from "../constants/urls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValid } from "../validation/userSchema";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "../utils/toasts";

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValid),
    mode: "onBlur",
  });
  const { mutate: handleSignUp, isLoading: isSigningUp } = useMutation(
    (data = {}) => postApi(API_URLS.AUTH.SIGN_UP, data),
    {
      onSuccess: () => {
        showSuccess("회원가입에 성공 했습니다");
        navigate("/sign-in");
      },
    }
  );

  return { register, handleSubmit, handleSignUp, isSigningUp, errors };
};
