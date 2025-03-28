import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPutApi } from "../../../../api/request";
import { useForm } from "react-hook-form";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../../recoil/flag/atoms";
import { setCartOptions } from "../../../../utils/defaultValues";
import { API_URLS } from "../../../../constants/urls";
import { showSuccess } from "../../../../utils/toasts";

const useCartDetail = (modalData) => {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
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
    () => authGetApi(API_URLS.CART.DETAIL(modalData.cartItemId)),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지,
      onSuccess: (res) => {
        reset({
          quantity: modalData.quantity,
          menuId: res?.data.menuId,
          storeId: res?.data.storeId,
          options: setCartOptions(res.data?.MenuCategories),
        });
      },
    }
  );
  const { mutate: updateCart, isLoading: isUpdatingCart } = useMutation(
    () =>
      authPutApi(API_URLS.CART.PUT_ITEM(modalData.cartItemId), {
        ...getValues(),
        options: Object.values(getValues("options")).flat(),
      }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.CART_DETAIL(modalData.cartItemId));
        await queryClient.invalidateQueries(QUERY_KEYS.CART);
        setIsModalOpen({ modalType: "", flag: false, modalData: null });
        showSuccess("수정 되었습니다");
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
