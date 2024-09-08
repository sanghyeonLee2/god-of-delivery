import {useMutation} from "react-query"
import {useNavigate} from "react-router-dom";
import {postAuthUserApi, postUserApi} from "../apis/api/user";
import {useSetRecoilState} from "recoil";
import {isSignInState, userInfoState} from "../recoil/user/atoms";

export const usePost = (url) => {

    const setSignIn = useSetRecoilState(isSignInState)
    const setUserInfo = useSetRecoilState(userInfoState)
    const navigate = useNavigate()
    return useMutation(
        () => postUserApi(url), {
            onSuccess: (key) => {
                switch (url) {
                    case "auth/sign-up":
                        navigate("/sign-in")
                        alert("회원가입 성공")
                        break
                    case "auth/sign-in":
                        setSignIn(true)
                        setUserInfo(key.data.userInfo)
                        localStorage.setItem("access-token", key.data.accessToken)
                        localStorage.setItem("refresh-token", key.data.refreshToken)
                        navigate("/")
                        break
                    case "customer/register":
                        alert("성공")
                        break
                    default:
                        alert("알 수 없는 오류")
                        break
                }
            },
            onError: () => {
                console.log("실패")
            },
            onSettled: () => {
                console.log("결과에 상관없이 실행")
            }
        })
}

export const useAuthPost = (url) => {
    return useMutation(
        () => postAuthUserApi(url), {
            onSuccess: (key) => {
                switch (url) {
                    case "customer/address":
                        alert("성공")
                        break
                    default:
                        alert("알 수 없는 오류")
                        break
                }
            },
            onError: () => {
                console.log("실패")
            },
            onSettled: () => {
                console.log("결과에 상관없이 실행")
            }
        })
}