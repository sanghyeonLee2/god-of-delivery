import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

export const useGetCartAndInitForm = (url) => {
    const {handleSubmit, control, register, reset, watch, getValues, setValue} = useForm();
    const {data, isError, status, isLoading, refetch} = useQuery(
        ["getCart", url],
        () => getApi(url),
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
        query: {data: data?.data, isError, status, isLoading, refetch},
        form: {control, register, getValues, setValue, watch, handleSubmit},
        refetchCart: refetch,  // 외부에서 강제로 다시 데이터를 불러올 수 있도록 반환
    };
};
