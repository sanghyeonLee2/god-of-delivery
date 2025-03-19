import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "react-query";
import {authPostApi} from "../api/user";
import {API_URLS} from "../constants/urls";
import {QUERY_KEYS} from "../constants/queryKeys";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../recoil/flag/atoms";
import {useLocation} from "react-router-dom";
import {showSuccess} from "../utils/toasts";

export const useCreateOwnerReview = (reviewId) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page') || 1;
    const queryClient = useQueryClient();
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const {handleSubmit, register}
        = useForm({
        defaultValues: {
            content: "",
            reviewId: 0
        },
    })

    const {mutate: handleCreateOwnerReview, isLoading: isCreatingOwnerReview} = useMutation(
        (data) => authPostApi(API_URLS.POST_OWNER_REVIEW, {...data, reviewId}), {
            onSuccess: async () => {
                showSuccess("리뷰를 추가 되었습니다")
                await queryClient.invalidateQueries([API_URLS.GET_OWNER_REVIEWS(page), QUERY_KEYS.REVIEWS]);
                setIsModalOpen({modalType: "", flag: false, modalData: null})
            }
        });


    return {
        register,
        handleSubmit,
        handleCreateOwnerReview,
        isCreatingOwnerReview
    };
}
