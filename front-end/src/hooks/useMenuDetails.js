import {useMutation, useQuery, useQueryClient} from "react-query";
import {authPostApi, authPutApi, getApi} from "../apis/api/user";
import {useForm} from "react-hook-form";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../recoil/flag/atoms";
import {setMenuOptions} from "../utils/defaultValues";
import {API_URLS} from "../apis/constants/urls";

export const useMenuDetails = (menuAPi) => {
    const navigate = useNavigate()
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
                if (window.confirm("장바구니에 담겼습니다. 이동 하시겠습니까?")) {
                    setIsModalOpen({modalType: "", flag: false, modalData: null})
                    navigate("/cart")
                }
            }
        });


    const {mutate: handleUpdateCart, isLoading: isUpdateCart} = useMutation(
        (data) => authPutApi(menuAPi, data), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([QUERY_KEYS.MENU_DETAILS, API_URLS.GET_CART])
                setIsModalOpen({modalType: "", flag: false, modalData: null})
                alert("장바구니가 수정되었습니다.")
            }
        });

    return {
        query: {menuData: data?.data, isError, status, isLoading},
        mutate: {handlePostCart, isCartPosting, handleUpdateCart, isUpdateCart},
        form: {control, register, getValues, setValue, watch, handleSubmit}
    };
}
export default useMenuDetails