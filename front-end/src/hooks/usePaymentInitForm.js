import {useForm} from "react-hook-form";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../recoil/user/atoms";

export const usePaymentInitForm = (orderInfo) => {
    const userInfo = useRecoilValue(userInfoState)
    const {handleSubmit, control, register, reset, watch, getValues, setValue}
        = useForm({
        defaultValues:
            {
                ...orderInfo,
                detailAddress: "",
                requestedTerm: "",
                contact: "",
                paymentMethod: "card",
                orderType: "delivery",
                address: userInfo?.address,
            }
    })
    return {
        control, register, getValues, setValue, watch, handleSubmit
    };
}
