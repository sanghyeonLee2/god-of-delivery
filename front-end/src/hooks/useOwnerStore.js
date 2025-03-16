import {useForm} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {authGetApi, authPutApi} from "../apis/api/user";
import {API_URLS} from "../apis/constants/urls";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../recoil/user/atoms";

export const useOwnerStore = () => {
    const {userId} = useRecoilValue(userInfoState)
    const {data, isLoading} = useQuery(
        [API_URLS.GET_OWNER_STORE, userId],
        () => authGetApi(API_URLS.GET_OWNER_STORE),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
        }
    );

    const {register, getValues, handleSubmit}
        = useForm();

    const {mutate: updateStore, isLoading: isUpdating} = useMutation(
        () => authPutApi(API_URLS.PUT_OWNER_STORE, getValues()),
        {
            onSuccess: () => {
                alert("가게 정보를 수정했습니다.");
            }
        }
    );

    return {
        storeData: data?.data,
        isUpdating,
        handleSubmit: handleSubmit(() => updateStore()),
        isLoading,
        register,
    };
};
