import { useMutation, useQuery, useQueryClient } from "react-query";
import { authDeleteApi, authGetApi } from "../../../../api/request";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { API_URLS } from "../../../../constants/urls";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "../../../../utils/toasts";
import { cartMenuTotalPrice } from "../../../../utils/calculator";

export const useCart = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(QUERY_KEYS.CART, () => authGetApi(API_URLS.CART.BASE), {
    staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
    cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
    select: (res) => ({
      ...res.data,
      cartMenuTotalPrice: cartMenuTotalPrice(res.data.CartItems),
    }),
  });
  const { mutate: handleDeleteCartItem } = useMutation(
    (cartItemId) => authDeleteApi(API_URLS.CART.ITEM(cartItemId)),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.CART);
        showSuccess("장바구니 메뉴가 삭제되었습니다");
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
          paymentInfo: {
            cartMenuTotalPrice: data?.cartMenuTotalPrice,
            tips: data?.Store.deliveryTip,
          },
        },
      });
    },
  };
};
