import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPostApi } from "../../../../api/request";
import { useForm } from "react-hook-form";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../../recoil/flag/atoms";
import { setCartOptions } from "../../../../utils/defaultValues";
import { API_URLS } from "../../../../constants/urls";
import { showSuccess } from "../../../../utils/toasts";
import { useEffect } from "react";
import { extractSelectedOptionIds, menuDetailOptionsTrans } from "../../../../utils/transducer";

export const useMenuDetail = (modalData) => {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const queryClient = useQueryClient();
  const { handleSubmit, control, register, reset, watch, getValues, setValue } = useForm();
  const { data, isLoading: isFetching } = useQuery(
    QUERY_KEYS.MENU_DETAIL(modalData.menuId),
    () => authGetApi(API_URLS.MENU.GET(modalData.menuId)),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      select: (res) => ({
        ...res.data,
        MenuCategories: menuDetailOptionsTrans(res.data.MenuCategories),
      }),
    }
  );

  useEffect(() => {
    if (data) {
      reset({
        quantity: 1,
        menuId: data.menuId,
        storeId: data.storeId,
        options: setCartOptions(data.MenuCategories),
      });
    }
  }, [data]);

  const { mutate: mutateMenuDetail, isLoading: isCartPosting } = useMutation(
    () =>
      authPostApi(API_URLS.CART.BASE, {
        ...getValues(),
        options: extractSelectedOptionIds(getValues("options")),
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
