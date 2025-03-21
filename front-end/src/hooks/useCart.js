import {useMutation, useQuery, useQueryClient} from "react-query";
import {authDeleteApi, authGetApi} from "../api/user";
import {QUERY_KEYS} from "../constants/queryKeys";
import {API_URLS} from "../constants/urls";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../recoil/flag/atoms";
import {useNavigate} from "react-router-dom";
import {showSuccess} from "../utils/toasts";

export const useCart = () => {
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {data, isLoading} = useQuery(
        [QUERY_KEYS.CART, API_URLS.GET_CART],
        () => authGetApi(API_URLS.GET_CART),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
            select: (res) => {
                const totalCartMenuPrice = res.data?.CartItems.reduce((sum, cartItem) => {
                    const menuTotal = (cartItem.price || 0) * cartItem.quantity;
                    const optionsTotal = cartItem.CartItemOptions.reduce((optionSum, option) => {
                        return optionSum + (option.price || 0);
                    }, 0);

                    return sum + menuTotal + optionsTotal;
                }, 0)
                return {
                    ...res.data,
                    totalCartMenuPrice
                }
            },

        }
    );
    const {mutate: handleDeleteCartItem} = useMutation(
        (cartItemId) => authDeleteApi(API_URLS.DELETE_CART(cartItemId)), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([QUERY_KEYS.MENU_DETAILS, API_URLS.GET_CART])
                showSuccess("장바구니 메뉴가 삭제되었습니다")
                setIsModalOpen({modalType: "", flag: false, modalData: null})
            }
        });
    return {
        cartData: data,
        isLoading,
        handleDeleteCartItem,
        handleSubmit: () => {
            navigate("/payment", {
                state: {
                    paymentInfo: {
                        totalCartMenuPrice: data?.totalCartMenuPrice,
                        tips: data?.Store.deleveryTip,
                    }
                }
            })
        },
    };
};
