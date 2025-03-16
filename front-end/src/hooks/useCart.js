import {useMutation, useQuery, useQueryClient} from "react-query";
import {authDeleteApi, authGetApi} from "../apis/api/user";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {API_URLS} from "../apis/constants/urls";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../recoil/flag/atoms";
import {useNavigate} from "react-router-dom";

export const useCart = () => {
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {data, isError, status, isLoading} = useQuery(
        [QUERY_KEYS.CART, API_URLS.GET_CART],
        () => authGetApi(API_URLS.GET_CART),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
            select: (res) => {
                return {
                    ...res.data,
                    totalCartMenuPrice: res.data?.cartItems.reduce((acc, {price, quantity}) =>
                        acc + (price * quantity), 0)
                }
            },
        }
    );
    const {mutate: handleDeleteCartItem, isLoading: isCartItemDeleting} = useMutation(
        (cartItemId) => authDeleteApi(API_URLS.DELETE_CART(cartItemId)), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([QUERY_KEYS.MENU_DETAILS, API_URLS.GET_CART])
                setIsModalOpen({modalType: "", flag: false, modalData: null})
            }
        });

    return {
        cartData: data, isLoading,
        handleDeleteCartItem, isCartItemDeleting,
        handleSubmit: () => {
            navigate("/payment", {
                state: {
                    paymentInfo: {
                        totalCartMenuPrice: data?.totalCartMenuPrice,
                        tips: data?.store.tips,
                    }
                }
            })
        },
    };
};
