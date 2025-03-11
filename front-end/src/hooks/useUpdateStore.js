import {useForm} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {authGetApi, authPutApi} from "../apis/api/user";
import {useEffect} from "react";

export const useUpdateStore = (url) => {
    const {data, isError, status, isLoading} = useQuery(
        ["getMenu", url],
        () => authGetApi(url),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
        }
    );

    const {register, getValues, handleSubmit, reset} = useForm({
        defaultValues: {} // 초기값을 빈 객체로 설정
    });

    // 데이터가 로드되면 defaultValues를 업데이트
    useEffect(() => {
        if (data?.data) {
            reset(data.data); // 새로운 데이터를 form에 반영
        }
    }, [data, reset]);

    const {mutate: updateStore, isLoading: isUpdating} = useMutation(
        (formData) => authPutApi(`store-put/${data?.data.storeId}`, formData),
        {
            onSuccess: () => {
                alert("가게 정보를 수정했습니다.");
            },
            onError: (error) => {
                console.error("가게 정보 수정 실패:", error);
            }
        }
    );

    return {
        updateStore,
        isUpdating,
        handleSubmit,
        isLoading,
        register,
        getValues,
    };
};
