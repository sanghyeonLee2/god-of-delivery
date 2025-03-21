import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { authDeleteApi, authGetApi, authPutApi } from "../api/user";
import { API_URLS } from "../constants/urls";
import { showSuccess } from "../utils/toasts";
import { useState } from "react";
import { QUERY_KEYS } from "../constants/queryKeys";
import { useParams } from "react-router-dom";

export const useMenuCategory = () => {
  const params = useParams();
  const { menuId } = params;
  const [updateMode, setUpdateMode] = useState(false);
  const GET_OWNER_MENUS_CATEGORY_URL = API_URLS.GET_OWNER_MENUS_CATEGORY(menuId);
  const queryClient = useQueryClient();

  const { register, handleSubmit, getValues } = useForm();

  /* const {mutate: createMenuCategory} = useMutation(
         () => authPostApi(API_URLS.PUT_OWNER_MENUS(menuId), getValues()), {
             onSuccess: async () => {
                 await queryClient.invalidateQueries([API_URLS.GET_OWNER_MENUS_CATEGORY, API_URLS.GET_OWNER_MENUS_CATEGORY])
                 showSuccess("메뉴 카테고리 정보를 추가 했습니다");
             }
         });*/
  const { data, isLoading } = useQuery(
    [GET_OWNER_MENUS_CATEGORY_URL, QUERY_KEYS.MENU_CATEGORY],
    () => authGetApi(GET_OWNER_MENUS_CATEGORY_URL),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
    }
  );

  const { mutate: updateMenuCategory } = useMutation(
    () => authPutApi(API_URLS.PUT_OWNER_MENUS_CATEGORY(menuId), getValues()),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([
          GET_OWNER_MENUS_CATEGORY_URL,
          QUERY_KEYS.MENU_CATEGORY,
        ]);
        showSuccess("메뉴 카테고리 정보를 수정 했습니다");
      },
    }
  );

  const { mutate: deleteMenuCategory } = useMutation(
    () => authDeleteApi(API_URLS.DELETE_OWNER_MENUS_CATEGORY(menuId)),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([
          GET_OWNER_MENUS_CATEGORY_URL,
          QUERY_KEYS.MENU_CATEGORY,
        ]);
        showSuccess("메뉴 카테고리 정보를 삭제 했습니다");
      },
    }
  );

  return {
    isLoading,
    menuCategoryData: data?.data,
    updateMenuCategory: handleSubmit(updateMenuCategory),
    deleteMenuCategory: () => deleteMenuCategory(),
    register,
    updateMode,
    cancelCategoryUpdateMode: () => setUpdateMode(false),
    setCategoryUpdateMode: () => setUpdateMode(true),
  };
};
