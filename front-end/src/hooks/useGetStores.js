import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";
import {useState} from "react";

export const useGetStores = (url) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data, isError, status, isLoading} = useQuery(
        ["getStoresData", currentPage],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(`${url}/${currentPage}`),
        {
            select: (res) => {
                return {
                    storesData: res.data.storeList,
                    totalPages: Math.ceil(res.data.totalItems / res.data.pageSize),
                }
            },
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );
    return {
        storesData: data?.storesData,
        totalPages: data?.totalPages,
        isError,
        status,
        isLoading,
        currentPage,
        setCurrentPage
    };
}
export default useGetStores