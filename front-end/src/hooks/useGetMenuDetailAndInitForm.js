import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";
import {useForm} from "react-hook-form";
import {setMenuDetail} from "../utils/defaultValues";
import {useEffect} from "react";

export const useGetMenuDetailAndInitForm = (url) => {
    const {handleSubmit, control, register, reset, watch, getValues, setValue} = useForm()
    const {data, isError, status, isLoading} = useQuery(
        ["getMenuDetail", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(url),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );
    useEffect(() => {
        if (data?.data) {
            reset(setMenuDetail(data?.data?.details, data.data?.quantity, data.data?.menuId, data.data?.storeId)); // 폼 초기값 설정
        }
    }, [data, reset]);

    return {
        query: {data: data?.data, isError, status, isLoading},
        form: {control, register, getValues, setValue, watch, handleSubmit}
    };
}
export default useGetMenuDetailAndInitForm