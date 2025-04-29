import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { userAddressState } from "@recoil/user/atoms";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { authPostApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { showSuccess } from "@utils/toasts";
import { SUCCESS_MESSAGES } from "@constants/messages";
import { QUERY_KEYS } from "@constants/queryKeys";

export const usePayment = () => {
  const queryClient = useQueryClient();
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
      onSuccess: async (res) => {
        await queryClient.invalidateQueries(QUERY_KEYS.ORDERS(1));
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
