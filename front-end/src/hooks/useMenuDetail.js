import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPostApi } from "../api/request";
import { useForm } from "react-hook-form";
import { QUERY_KEYS } from "../constants/queryKeys";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../recoil/flag/atoms";
import { setCartOptions } from "../utils/defaultValues";
import { API_URLS } from "../constants/urls";
import { showSuccess } from "../utils/toasts";

export const useMenuDetail = (modalData) => {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(QUERY_KEYS.MENU_DETAIL(modalData.menuId));
  const { handleSubmit, control, register, reset, watch, getValues, setValue } = useForm({
    defaultValues: {
      quantity: 1,
      menuId: cachedData?.data?.menuId || 0,
      storeId: cachedData?.data?.storeId || 0,
      options: setCartOptions(cachedData?.data?.MenuCategories) || [],
    },
  });

  const { data, isLoading: isFetching } = useQuery(
    QUERY_KEYS.MENU_DETAIL(modalData.menuId),
    () => authGetApi(API_URLS.MENU.GET(modalData.menuId)),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지,
      onSuccess: (res) => {
        reset({
          quantity: 1,
          menuId: res.menuId,
          storeId: res.storeId,
          options: setCartOptions(res.MenuCategories),
        });
      },
      select: (res) => {
        return {
          ...res.data,
          MenuCategories: res.data.MenuCategories.map((category) => {
            if (
              category.isEssential &&
              category.maxQuantity === 1 &&
              category.MenuOptions.length > 0
            ) {
              const updatedOptions = category.MenuOptions.map((option, idx) =>
                idx === 0 ? { ...option, hasMenu: true } : option
              );
              return { ...category, MenuOptions: updatedOptions };
            }
            return category;
          }),
        };
      },
    }
  );

  const { mutate: mutateMenuDetail, isLoading: isCartPosting } = useMutation(
    () =>
      authPostApi(API_URLS.CART.BASE, {
        ...getValues(),
        options: Object.values(getValues("options")).flat(),
      }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.CART);
        showSuccess("장바구니에 담았습니다");
        setIsModalOpen({ modalType: "", flag: false, modalData: null });
      },
    }
  );

  return {
    menuDetailData: data,
    isFetching,
    mutateMenuDetail: () => mutateMenuDetail(),
    isCartPosting,
    form: { control, register, getValues, setValue, watch, handleSubmit },
  };
};
export default useMenuDetail;
