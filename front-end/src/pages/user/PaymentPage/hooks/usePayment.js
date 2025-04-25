import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { userAddressState } from "@recoil/user/atoms";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { authPostApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { showSuccess } from "@utils/toasts";
import { SUCCESS_MESSAGES } from "@constants/messages";

export const usePayment = () => {
  const location = useLocation();
  const address = useRecoilValue(userAddressState);
  const navigate = useNavigate();
  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      paymentMethod: "card",
      requests: "",
      address,
      detailAddress: "",
      orderType: "delivery",
      contact: "",
    },
  });

  const { mutate, isLoading: isOrderPosting } = useMutation(
    (data = {}) => authPostApi(API_URLS.ORDER.BASE, data),
    {
      onSuccess: (res) => {
        showSuccess(SUCCESS_MESSAGES.PAYMENT_COMPLETED);
        navigate(`/orders/${res.data?.orderId}`);
      },
    }
  );

  return {
    paymentInfo: location.state,
    isOrderPosting,
    handleSubmit: handleSubmit((data) => mutate(data)),
    control,
    register,
  };
};
