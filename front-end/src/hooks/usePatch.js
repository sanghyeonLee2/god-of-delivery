import {useMutation, useQueryClient} from "react-query"
import {authPatchApi} from "../apis/api/user";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../recoil/flag/atoms";

export const usePatch = (url) => {
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const queryClient = useQueryClient()
    return useMutation(
        () => authPatchApi(url), {
            onError: () => {
                console.log("실패")
            },
            onSuccess: async () => {
                alert("수정 되었습니다.")
                setIsModalOpen({modalType: null, modalFlag: false})

                await queryClient.invalidateQueries(["getCart", "cart"]);
            }
        }) //요청 2번되는거 추후 수정
}
