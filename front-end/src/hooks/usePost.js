import {useMutation} from "react-query"
import {useNavigate} from "react-router-dom";
import {postUserApi} from "../apis/api/user";
import {useSetRecoilState} from "recoil";
import {isSigInState} from "../recoil/user/atoms";

export const usePost = (url) => {
    const setSignIn = useSetRecoilState(isSigInState)
    const navigate = useNavigate()
    return useMutation(
        () => postUserApi(url), {
            onSuccess: (key, value) => {
                console.log("성공")
                switch (url) {
                    case "/signup":
                        navigate("/sign-in")
                        alert("회원가입 성공")
                        break
                    case "/sign-in":
                        setSignIn(true)
                        localStorage.setItem("access-token", value)
                        localStorage.setItem("refresh-token", value)
                        navigate("/")
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