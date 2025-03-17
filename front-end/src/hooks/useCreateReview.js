import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "react-query";
import {authPostApi} from "../apis/api/user";
import {API_URLS} from "../apis/constants/urls";
import {QUERY_KEYS} from "../apis/constants/queryKeys";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../recoil/flag/atoms";

export const useCreateReview = ({orderId, storeId}) => {
    const queryClient = useQueryClient();
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const {handleSubmit, watch, register, setValue}
        = useForm({
        defaultValues: {
            orderId,
            storeId,
            rating: 5,
            content: "",
            img: null
        },
    })

    const {mutate: handleCreateReview, isLoading: isCreatingReview} = useMutation(
        (data) => authPostApi(API_URLS.POST_REVIEW, data), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([QUERY_KEYS.ORDERS, API_URLS.GET_ORDER(orderId)])
                setIsModalOpen({modalType: "", flag: false, modalData: null})
            }
        });

    const handleRatingChange = (newRating) => {
        setValue("rating", newRating);
    };

    return {
        form: {register, handleRatingChange, handleSubmit, watch},
        mutation: {handleCreateReview, isCreatingReview}
    };
}
export default useCreateReview