import {useForm} from "react-hook-form";
import {useState} from "react";
import {useMutation, useQueryClient} from "react-query";
import {authDeleteApi, authPatchApi} from "../../api/user";
import {API_URLS} from "../../constants/urls";
import {QUERY_KEYS} from "../../constants/queryKeys";
import {useLocation} from "react-router-dom";
import {showSuccess} from "../../utils/toasts";

export const useOwnerReview = (ownerReview) => {
    const queryClient = useQueryClient()
    const [updateMode, setUpdateMode] = useState(false)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page') || 1;
    const {handleSubmit, register}
        = useForm();

    const {mutate: deleteReview, isLoading: isDeleting} = useMutation(
        () => authDeleteApi(API_URLS.DELETE_OWNER_REVIEW(ownerReview.id)), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([API_URLS.GET_OWNER_REVIEWS(page), QUERY_KEYS.REVIEWS]);
                showSuccess("리뷰가 삭제되었습니다")
            }
        });

    const {mutate: updateReview, isLoading: isUpdating} = useMutation(
        () => authPatchApi(API_URLS.PATCH_OWNER_REVIEW(ownerReview.id), ownerReview), {
            onSuccess: async () => {
                await queryClient.invalidateQueries([API_URLS.GET_OWNER_REVIEWS(page), QUERY_KEYS.REVIEWS]);
                showSuccess("리뷰가 수정되었습니다")
                setUpdateMode(false)
            }
        });

    return {
        updateMode,
        setUpdateMode: () => setUpdateMode(true),
        cancelUpdateMode: () => setUpdateMode(false),
        register,
        deleteReview,
        isDeleting,
        updateReview,
        handleSubmit,
        isUpdating
    }
};
