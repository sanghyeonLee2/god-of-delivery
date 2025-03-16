import {useMutation, useQueryClient} from "react-query";
import {postApi} from "../apis/api/user";
import {API_URLS} from "../apis/constants/urls";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signInValid} from "../validation/userSchema";
import {useNavigate} from "react-router-dom";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {useSetRecoilState} from "recoil";
import {isSignInState} from "../recoil/user/atoms";

export const useSignIn = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const setSignIn = useSetRecoilState(isSignInState)
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        resolver: yupResolver(signInValid),
        mode: "onBlur"
    })
    const {mutate: handleSignIn, isLoggingIn} = useMutation(
        (data) => postApi(API_URLS.SIGN_IN, data), {
            onSuccess: async (res) => {
                localStorage.setItem("access-token", res.data.accessToken);
                localStorage.setItem("refresh-token", res.data.refreshToken);
                setSignIn(true);
                await queryClient.invalidateQueries([QUERY_KEYS.ME, API_URLS.GET_ME]);
                alert("로그인에 성공하셨습니다.");
                navigate("/");
            }
        });

    return {register, handleSubmit, handleSignIn, isLoggingIn, errors};
};
