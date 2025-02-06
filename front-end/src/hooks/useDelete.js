import {useMutation, useQueryClient} from "react-query"
import {authDeleteApi} from "../apis/api/user";

export const useDelete = (url) => {
    const queryClient = useQueryClient()
    return useMutation(
        (id) => authDeleteApi(`${url}/${id}`), {
            onSuccess: async () => {
                switch (url) {
                    case "cart-delete":
                        alert("장바구니에서 삭제 되었습니다.")
                        await queryClient.invalidateQueries(["getCart", "cart"]);
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
