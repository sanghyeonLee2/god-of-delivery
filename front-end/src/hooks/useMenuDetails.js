import {useMutation, useQuery, useQueryClient} from "react-query";
import {authPostApi, authPutApi, getApi} from "../api/user";
import {useForm} from "react-hook-form";
import {QUERY_KEYS} from "../constants/queryKeys";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../recoil/flag/atoms";
import {setMenuOptions} from "../utils/defaultValues";
import {API_URLS} from "../constants/urls";
import {showSuccess} from "../utils/toasts";

export const useMenuDetails = (menuAPi) => {
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const queryClient = useQueryClient();
    const cachedData = queryClient.getQueryData([QUERY_KEYS.MENU_DETAILS, menuAPi]);

    const {handleSubmit, control, register, reset, watch, getValues, setValue} = useForm(
        {
            defaultValues: {
                quantity: 1,
                menuId: cachedData?.data?.menuId || 0,
                storeId: cachedData?.data?.storeId || 0,
                options: setMenuOptions(cachedData?.data?.menuCategories)
            }
        }
    )

    const {data, isError, status, isLoading} = useQuery(
        [QUERY_KEYS.MENU_DETAILS, menuAPi],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(menuAPi),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지,
            onSuccess: data => {
                reset({
                    quantity: 1,
                    menuId: data?.data.menuId,
                    storeId: data?.data.storeId,
                    options: setMenuOptions(data.data?.menuCategories)
                })
            },
        }
    );

    const {mutate: handlePostCart, isLoading: isCartPosting} = useMutation(
        (data) => authPostApi("cart", data), {
            onSuccess: () => {
                showSuccess("장바구니에 담았습니다")
                setIsModalOpen({modalType: "", flag: false, modalData: null})
            }
        });


    const {mutate: handleUpdateCart, isLoading: isUpdatingCart} = useMutation(
        (data) => authPutApi(menuAPi, data), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([QUERY_KEYS.MENU_DETAILS, API_URLS.GET_CART])
                setIsModalOpen({modalType: "", flag: false, modalData: null})
                showSuccess("수정 되었습니다")
            }
        });

    return {
        query: {menuData: data?.data, isError, status, isLoading},
        mutate: {handlePostCart, isCartPosting, handleUpdateCart, isUpdatingCart},
        form: {control, register, getValues, setValue, watch, handleSubmit}
    };
}
export default useMenuDetails