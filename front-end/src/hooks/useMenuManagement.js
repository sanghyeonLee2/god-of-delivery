import {useMutation, useQuery, useQueryClient} from "react-query";
import {authGetApi, authPostApi} from "../api/user";
import {API_URLS} from "../constants/urls";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../recoil/user/atoms";
import {showSuccess} from "../utils/toasts";

export const useMenuManagement = () => {
        const queryClient = useQueryClient();
        const {userId} = useRecoilValue(userInfoState)
        const {data, isLoading} = useQuery(
            [API_URLS.GET_OWNER_MENUS, userId],
            () => authGetApi(API_URLS.GET_OWNER_MENUS),
            {
                staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
                cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
            }
        );


        const {mutate: updateMenus} = useMutation(
            () => authPostApi(API_URLS), {
                onSuccess: async () => {
                    await queryClient.invalidateQueries([API_URLS.GET_OWNER_MENUS, userId])
                    showSuccess("메뉴 정보를 추가 했습니다")
                }
            })

        return {
            menuData: data?.data,
            updateMenus,
            isLoading,
        };
    }
;
