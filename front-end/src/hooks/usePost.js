import {useMutation} from "react-query"
import {useNavigate} from "react-router-dom";
import {authPostApi, postApi} from "../apis/api/user";
import {useSetRecoilState} from "recoil";
import {isSignInState} from "../recoil/user/atoms";
import {isModalOpenState} from "../recoil/flag/atoms";

export const usePost = (url, isAuth = false) => {
    const setSignIn = useSetRecoilState(isSignInState)
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const navigate = useNavigate()
    return useMutation(
        () => isAuth ? authPostApi(url) : postApi(url), {
            onSuccess: (res) => {
                switch (url) {
                    case "signUp":
                        navigate("/sign-in")
                        alert("회원가입 성공")
                        break
                    case "signIn":
                        setSignIn(true)
                        localStorage.setItem("access-token", res.data.accessToken)
                        localStorage.setItem("refresh-token", res.data.refreshToken)
                        navigate("/")
                        break
                    case "customer/register":
                        alert("성공")
                        break
                    case "order":
                        alert("성공")
                        break
                    case "cart-post":
                        if (window.confirm("장바구니에 담겼습니다. 이동 하시겠습니까?")) {
                            setIsModalOpen({modalType: null, modalFlag: false, modalIdData: null})
                            navigate("/cart")
                        }
                        break
                    case "address":
                        alert("주소가 추가 되었습니다.")
                        setIsModalOpen({modalType: null, modalFlag: false, modalIdData: null})
                        navigate("/category-info/전체보기/1", {state: {categoryId: "전체보기"}})
                        break
                    case "payment-post":
                        alert("결제가 완료 되었습니다.")
                        navigate("/order-status")
                        break;
                    default:
                        console.log(url)
                        alert("알 수 없는 오류")
                        break
                }
            },
            onError: () => {
                console.log("실패")
            },
        })
}
