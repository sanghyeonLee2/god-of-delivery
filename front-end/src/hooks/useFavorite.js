import {useMutation} from "react-query"
import {authDeleteApi, authPostApi} from "../apis/api/user";
import {useState} from "react";

export const useFavorite = (url, dipsInit) => {
    const [dipState, setDipState] = useState(dipsInit);
    const handleToggleDip = useMutation(
        async (storeId) => {
            if (dipState.isDip) {
                await authDeleteApi(`dip-delete/${storeId}`); // 기존 상태가 찜이면 삭제 요청
            } else {
                await authPostApi("dip-post", {storeId}); // 기존 상태가 찜이 아니면 추가 요청
            }
        }, {
            onSuccess: () => {
                setDipState(({isDip, dips}) => ({
                    isDip: !isDip,
                    dips: isDip ? dips - 1 : dips + 1,
                }));
            },
            onError: () => {
                console.log("실패")
            },
        })
    return [handleToggleDip, dipState]
};


