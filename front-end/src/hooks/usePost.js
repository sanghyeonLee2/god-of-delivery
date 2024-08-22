import {useMutation} from "react-query"
import {useNavigate} from "react-router-dom";
import {postUserApi} from "../apis/api/user";

export const usePost = (url) => {
    const navigate = useNavigate()
    return useMutation(
        () => postUserApi(url), {
            onSuccess: () => {
                console.log("성공")
                switch (url) {
                    case "/posts":
                        navigate("/sign-in")
                        alert("회원가입 성공")
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