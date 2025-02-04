import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";
import {useForm} from "react-hook-form";

export const useGetCartAndInitForm = (url) => {
    const {handleSubmit, control, register, reset, watch, getValues, setValue} = useForm()
    const {data, isError, status, isLoading} = useQuery(
        ["getCart", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(url),
        {
            onSuccess: response => {
                console.log(response.data)
                reset({
                        cartId: response.data.cartId,
                        receiptMethod: response.data.receiptMethods[0],
                        menus: response.data?.menus,
                        storeId: response.data.storeId,
                    }
                )
            },
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );
    //쿼리로 받아오고 reset 메소드로 폼 초기값 설정 해야함
    return {
        query: {data: data?.data, isError, status, isLoading},
        form: {control, register, getValues, setValue, watch, handleSubmit}
    };
}
