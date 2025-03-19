import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "react-query";
import {authDeleteApi, authPutApi} from "../api/user";
import {API_URLS} from "../constants/urls";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../recoil/user/atoms";
import {showSuccess} from "../utils/toasts";
import {useState} from "react";

export const useMenuBasicInfo = () => {

    const [updateMode, setUpdateMode] = useState(false)
    const queryClient = useQueryClient();
    const {userId} = useRecoilValue(userInfoState)

    const {register, handleSubmit, getValues} = useForm();

    const {mutate: updateMenus} = useMutation(
        (menuId) => console.log(getValues()) || authPutApi(API_URLS.PUT_OWNER_MENUS(menuId), getValues()), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([API_URLS.GET_OWNER_MENUS, userId])
                showSuccess("메뉴 정보를 수정 했습니다");
            }
        });

    const {mutate: deleteMenus} = useMutation(
        (menuId) => authDeleteApi(API_URLS.DELETE_OWNER_MENUS(menuId)),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries([API_URLS.GET_OWNER_MENUS, userId])
                showSuccess("메뉴를 삭제 했습니다");
            }
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
