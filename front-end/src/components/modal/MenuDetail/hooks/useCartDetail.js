import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPutApi } from "@api/request";
import { useForm } from "react-hook-form";
import { QUERY_KEYS } from "@constants/queryKeys";
import { setCartOptions } from "@utils/defaultValues";
import { API_URLS } from "@constants/urls";
import { showSuccess } from "@utils/toasts";
import { extractSelectedOptionIds } from "@utils/transducer";
import useCloseModal from "@hooks/useCloseModal";
import { SUCCESS_MESSAGES } from "@constants/messages";

const useCartDetail = (modalData) => {
  const closeModal = useCloseModal();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(QUERY_KEYS.CART_DETAIL(modalData.cartItemId));
  const { handleSubmit, control, register, reset, watch, getValues, setValue } = useForm({
    defaultValues: {
      quantity: modalData.quantity,
      menuId: cachedData?.data?.menuId || 0,
      storeId: cachedData?.data?.storeId || 0,
      options: setCartOptions(cachedData?.data?.MenuCategories) || {},
    },
  });

  const { data, isLoading: isFetching } = useQuery(
    QUERY_KEYS.CART_DETAIL(modalData.cartItemId),
    () => authGetApi(API_URLS.CART.DETAIL(modalData.menuId)),
    {
      onSuccess: (res) =>
        reset({
          quantity: modalData.quantity,
          menuId: res?.data.menuId,
          storeId: res?.data.storeId,
          options: setCartOptions(res.data?.MenuCategories),
        }),
    }
  );
  const { mutate: updateCart, isLoading: isUpdatingCart } = useMutation(
    () =>
      authPutApi(API_URLS.CART.PUT_ITEM(modalData.cartItemId), {
        ...getValues(),
        options: extractSelectedOptionIds(getValues("options")),
      }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.CART_DETAIL(modalData.cartItemId));
        await queryClient.invalidateQueries(QUERY_KEYS.CART);
        closeModal();
        showSuccess(SUCCESS_MESSAGES.CART_UPDATED);
      },
    }
  );

  return {
    cartItemData: data?.data,
    isFetching,
    updateCart: () => updateCart(),
    isUpdatingCart,
    form: { control, register, getValues, setValue, watch, handleSubmit },
  };
};
export default useCartDetail;
