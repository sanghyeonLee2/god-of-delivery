import {useMutation} from "react-query"
import {authPutApi} from "../apis/api/user";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../recoil/flag/atoms";

export const usePut = (url) => {
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    return useMutation(
        () => authPutApi(url), {
            onError: () => {
                console.log("실패")
            },
            onSuccess: () => {
                alert("수정 되었습니다.")
                setIsModalOpen({modalType: null, modalFlag: false})
            }
        })
}
