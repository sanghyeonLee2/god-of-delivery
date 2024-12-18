import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";
import {useForm} from "react-hook-form";

export const useGetAndInitForm = (url) => {
    const {handleSubmit, control, register, reset, watch, getValues, setValue} = useForm()
    const {data, isError, status, isLoading} = useQuery(
        ["getData", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(url),
        {
            onSuccess: response => {
                reset({
                        receiptMethods: response.data?.receiptMethods[0],
                        tip: 0,
                        menus: response.data?.menus
                    }
                )
            },
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );

    return {
        query: {data: data?.data, isError, status, isLoading},
        form: {control, register, getValues, setValue, watch, handleSubmit}
    };
}
export default useGetAndInitForm