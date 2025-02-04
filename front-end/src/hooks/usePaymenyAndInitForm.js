import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {userInfoState} from "../recoil/user/atoms";

export const usePaymentAndInitForm = (url, orderInfo) => {
    const {handleSubmit, control, register, reset, watch, getValues, setValue} = useForm()
    const {data, isError, status, isLoading} = useQuery(
        ["getPayment", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(url),
        {
            /*  onSuccess: response => {
                  console.log("VZC")
                  reset(setMenuDetail(response.data?.details))
              },*/
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            refetchOnWindowFocus: true, // 창으로 돌아오면 최신화
        }
    );
    const userInfo = useRecoilState(userInfoState)
    useEffect(() => {
        if (data?.data) {
            reset(
                {
                    ...orderInfo,
                    ...data.data,
                    paymentMethod: "card",
                    orderType: "delivery",
                    currentAddress: userInfo.currentAddress,
                }
            )
        }
    }, [data, reset]);

    return {
        query: {data: data?.data, isError, status, isLoading},
        form: {control, register, getValues, setValue, watch, handleSubmit}
    };
}
export default usePaymentAndInitForm