import { useMutation } from "react-query";
import { postApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValid } from "@validation/userSchema";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@utils/toasts";
import { SUCCESS_MESSAGES } from "@constants/messages";

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
        showSuccess(SUCCESS_MESSAGES.SIGNUP_SUCCESS);
        navigate("/auth/sign-in");
      },
    }
  );

  return { register, handleSubmit, handleSignUp, isSigningUp, errors };
};
