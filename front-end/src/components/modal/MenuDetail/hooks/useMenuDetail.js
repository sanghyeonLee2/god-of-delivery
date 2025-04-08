import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPostApi } from "@api/request";
import { useForm } from "react-hook-form";
import { QUERY_KEYS } from "@constants/queryKeys";
import { setCartOptions } from "@utils/defaultValues";
import { API_URLS } from "@constants/urls";
import { showError, showSuccess } from "@utils/toasts";
import { useEffect } from "react";
import { extractSelectedOptionIds, menuDetailOptionsTrans } from "@utils/transducer";
import useCloseModal from "@hooks/useCloseModal";
import { errorHandler } from "@utils/errorHandler";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@constants/messages";

export const useMenuDetail = (modalData) => {
  const closeModal = useCloseModal();
  const queryClient = useQueryClient();
  const { handleSubmit, control, register, reset, watch, getValues, setValue } = useForm();
  const { data, isLoading: isFetching } = useQuery(
    QUERY_KEYS.MENU_DETAIL(modalData.menuId),
    () => authGetApi(API_URLS.MENU.GET(modalData.menuId)),
    {
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
  }, [data, reset]);

  const { mutate: mutateMenuDetail, isLoading: isCartPosting } = useMutation(
    () =>
      authPostApi(API_URLS.CART.BASE, {
        ...getValues(),
        options: extractSelectedOptionIds(getValues("options")),
      }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.CART);
        showSuccess(SUCCESS_MESSAGES.ITEM_ADDED_TO_CART);
        closeModal();
      },
      onError: (err) => {
        if (err.status === 409) {
          return showError(ERROR_MESSAGES.ONLY_ONE_STORE_ALLOWED);
        }
        return errorHandler(err);
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
