import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi, authPutApi } from "../api/request";
import { API_URLS } from "../constants/urls";
import { showSuccess } from "../utils/toasts";
import { useState } from "react";
import { QUERY_KEYS } from "../constants/queryKeys";

export const useMenuOption = (menuId, menuOptionId) => {
  const [updateMode, setUpdateMode] = useState(false);
  const queryClient = useQueryClient();

  const { register, handleSubmit, getValues } = useForm();

  /* const {mutate: createMenuCategory} = useMutation(
         () => authPostApi(API_URLS.PUT_OWNER_MENUS(menuId), getValues()), {
             onSuccess: async () => {
                 await queryClient.invalidateQueries([API_URLS.GET_OWNER_MENUS_CATEGORY, API_URLS.GET_OWNER_MENUS_CATEGORY])
                 showSuccess("메뉴 카테고리 정보를 추가 했습니다");
             }
         });*/

  const { mutate: updateMenuOption } = useMutation(
    () => authPutApi(API_URLS.MENU.OWNER.OPTION(menuId, menuOptionId), getValues()),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([QUERY_KEYS.MENU_CATEGORY]);
        showSuccess("메뉴 옵션 정보를 수정 했습니다");
      },
    }
  );

  const { mutate: deleteMenuOption } = useMutation(
    () => authDeleteApi(API_URLS.MENU.OWNER.OPTION(menuId, menuOptionId)),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([QUERY_KEYS.MENU_CATEGORY]);
        showSuccess("메뉴 옵션 정보를 삭제 했습니다");
      },
    }
  );

  return {
    handleSubmit,
    updateMenuOption: () => updateMenuOption(),
    deleteMenuOption: () => deleteMenuOption(),
    register,
    updateMode,
    cancelOptionUpdateMode: () => setUpdateMode(false),
    setOptionUpdateMode: () => setUpdateMode(true),
  };
};
