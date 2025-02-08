import {useQuery} from "react-query";
import {authGetApi} from "../apis/api/user";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

export const useGetCartAndInitForm = (url) => {
    const {handleSubmit, control, register, reset, watch, getValues, setValue} = useForm();
    const {data, isError, status, isLoading} = useQuery(
        ["getCoords", url],
        () => authGetApi(url),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
        }
    );

    useEffect(() => {
        if (data?.data) {
            reset({
                cartId: data.data.cartId,
                receiptMethod: data.data.receiptMethods[0],
                menus: data.data?.menus,
                storeId: data.data.storeId,
            });
        }
    }, [data, reset]);

    return {
        query: {data: data?.data, isError, status, isLoading},
        form: {control, register, getValues, setValue, watch, handleSubmit},
    };
};
