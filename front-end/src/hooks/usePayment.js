import {useForm} from "react-hook-form";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../recoil/user/atoms";
import {useLocation, useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {authPostApi} from "../apis/api/user";
import {API_URLS} from "../apis/constants/urls";

export const usePayment = () => {
    const location = useLocation();
    const {address} = useRecoilValue(userInfoState)
    const navigate = useNavigate();
    const {handleSubmit, control, register, reset, watch, getValues, setValue}
        = useForm({
        defaultValues:
            {
                paymentMethod: "card",
                requests: "",
                /* status: "접수 중",*/
                address,
                detailAddress: "",
                orderType: "takeOut",
                contact: "",
            }
    })

    const {mutate, isLoading: isOrderPosting} = useMutation(
        (data) => authPostApi(API_URLS.POST_ORDERS, data), {
            onSuccess: () => {
                const tmpOrderId = 1
                alert("결제가 완료되었습니다.")
                navigate(`/orders/${tmpOrderId}`)
            }
        });

    return {
        paymentInfo: location.state.paymentInfo,
        isOrderPosting,
        handleSubmit: handleSubmit((data) => mutate(data)),
        control,
        register,
    };
}
