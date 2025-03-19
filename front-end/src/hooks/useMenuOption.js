import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "react-query";
import {authDeleteApi, authPutApi} from "../api/user";
import {API_URLS} from "../constants/urls";
import {showSuccess} from "../utils/toasts";
import {useState} from "react";
import {QUERY_KEYS} from "../constants/queryKeys";

export const useMenuOption = (menuId, menuOptionId) => {
    const [updateMode, setUpdateMode] = useState(false)
    const GET_OWNER_MENUS_CATEGORY_URL = API_URLS.GET_OWNER_MENUS_CATEGORY(menuId)
    const queryClient = useQueryClient();

    const {register, handleSubmit, getValues}
        = useForm();

    /* const {mutate: createMenuCategory} = useMutation(
         () => authPostApi(API_URLS.PUT_OWNER_MENUS(menuId), getValues()), {
             onSuccess: async () => {
                 await queryClient.invalidateQueries([API_URLS.GET_OWNER_MENUS_CATEGORY, API_URLS.GET_OWNER_MENUS_CATEGORY])
                 showSuccess("메뉴 카테고리 정보를 추가 했습니다");
             }
         });*/

    const {mutate: updateMenuOption} = useMutation(
        () => authPutApi(API_URLS.PUT_OWNER_MENUS_OPTION(menuId, menuOptionId), getValues()), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([GET_OWNER_MENUS_CATEGORY_URL, QUERY_KEYS.MENU_CATEGORY])
                showSuccess("메뉴 옵션 정보를 수정 했습니다");
            }
        });

    const {mutate: deleteMenuOption} = useMutation(
        () => authDeleteApi(API_URLS.DELETE_OWNER_MENUS_CATEGORY(menuId, menuOptionId)),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries([GET_OWNER_MENUS_CATEGORY_URL, QUERY_KEYS.MENU_CATEGORY])
                showSuccess("메뉴 옵션 정보를 삭제 했습니다");
            }
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
