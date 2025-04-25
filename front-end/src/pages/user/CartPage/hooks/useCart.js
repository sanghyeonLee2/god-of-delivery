import { useMutation, useQuery, useQueryClient } from "react-query";
import { authDeleteApi, authGetApi } from "@api/request";
import { QUERY_KEYS } from "@constants/queryKeys";
import { API_URLS } from "@constants/urls";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@utils/toasts";
import { cartMenuTotalPrice } from "@utils/calculator";
import { SUCCESS_MESSAGES } from "@constants/messages";

export const useCart = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(QUERY_KEYS.CART, () => authGetApi(API_URLS.CART.BASE), {
    select: (res) => ({
      ...res.data,
      cartMenuTotalPrice: cartMenuTotalPrice(res.data?.CartItems),
    }),
  });
  const { mutate: handleDeleteCartItem } = useMutation(
    (cartItemId) => authDeleteApi(API_URLS.CART.ITEM(cartItemId)),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.CART);
        showSuccess(SUCCESS_MESSAGES.CART_ITEM_DELETED);
      },
    }
  );
  return {
    cartData: data,
    isLoading,
    handleDeleteCartItem,
    handleSubmit: () => {
      navigate("/payment", {
        state: {
          cartMenuTotalPrice: data?.cartMenuTotalPrice,
          tips: data?.Store.deliveryTip,
        },
      });
    },
  };
};
