import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPostApi, authPutApi } from "../api/request";
import { useForm } from "react-hook-form";
import { QUERY_KEYS } from "../constants/queryKeys";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../recoil/flag/atoms";
import { setMenuOptions } from "../utils/defaultValues";
import { API_URLS } from "../constants/urls";
import { showSuccess } from "../utils/toasts";

export const useMenuDetails = (modalData) => {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(QUERY_KEYS.MENU_DETAILS(modalData.menuId));
  const { handleSubmit, control, register, reset, watch, getValues, setValue } = useForm({
    defaultValues: {
      quantity: 1,
      menuId: cachedData?.data?.menuId || 0,
      storeId: cachedData?.data?.storeId || 0,
      options: setMenuOptions(cachedData?.data?.menuCategories),
    },
  });

  const { data, isError, status, isLoading } = useQuery(
    QUERY_KEYS.MENU_DETAILS(modalData.menuId),
    () => authGetApi(modalData.api),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지,
      onSuccess: (data) => {
        reset({
          quantity: 1,
          menuId: data?.data.menuId,
          storeId: data?.data.storeId,
          options: setMenuOptions(data.data?.menuCategories),
        });
      },
    }
  );

  const { mutate: handlePostCart, isLoading: isCartPosting } = useMutation(
    (data = {}) => authPostApi(API_URLS.CART.BASE, data),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.CART);
        showSuccess("장바구니에 담았습니다");
        setIsModalOpen({ modalType: "", flag: false, modalData: null });
      },
    }
  );

  const { mutate: handleUpdateCart, isLoading: isUpdatingCart } = useMutation(
    (cartItemId) => authPutApi(API_URLS.CART.PUT_ITEM(cartItemId), getValues()),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.CART);
        setIsModalOpen({ modalType: "", flag: false, modalData: null });
        showSuccess("수정 되었습니다");
      },
    }
  );

  return {
    query: { menuData: data?.data, isError, status, isLoading },
    mutate: { handlePostCart, isCartPosting, handleUpdateCart, isUpdatingCart },
    form: { control, register, getValues, setValue, watch, handleSubmit },
  };
};
export default useMenuDetails;
