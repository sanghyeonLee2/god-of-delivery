import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi, authPutApi } from "../api/request";
import { API_URLS } from "../constants/urls";
import { showSuccess } from "../utils/toasts";
import { useState } from "react";
import { QUERY_KEYS } from "../constants/queryKeys";

export const useMenuBasicInfo = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const queryClient = useQueryClient();
  const { register, handleSubmit, getValues } = useForm();

  const { mutate: updateMenus } = useMutation(
    (menuId) => authPutApi(API_URLS.MENU.MENU_BASIC(menuId), getValues()),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([QUERY_KEYS.OWNER_MENU]);
        showSuccess("메뉴 정보를 수정 했습니다");
      },
    }
  );

  const { mutate: deleteMenus } = useMutation(
    (menuId) => authDeleteApi(API_URLS.MENU.MENU_BASIC(menuId)),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([QUERY_KEYS.OWNER_MENU]);
        showSuccess("메뉴를 삭제 했습니다");
      },
    }
  );

  return {
    updateMenus,
    deleteMenus,
    handleSubmit,
    register,
    updateMode,
    cancelUpdateMode: () => setUpdateMode(false),
    setUpdateMode: () => setUpdateMode(true),
  };
};
