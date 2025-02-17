import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export const useGetReviews = (url) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {storeId} = useParams();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = queryParams.get('currentPage') || 1;
    const {data, isError, status, isLoading} = useQuery(
        ["getReviews", currentPage],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(`${url}/${currentPage}`),
        {
            select: (res) => {
                return {
                    reviews: res.data?.reviewList,
                    reviewStat: res.data?.reviewStat,
                    totalPages: Math.ceil(res.data.totalItems / res.data.pageSize),
                }
            },
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 상태로 유지됨
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 유지
        }
    );

    const setCurrentPage = (newPage) => {
        navigate(`/store/${storeId}?currentPage=${newPage}`);
    };
    return {
        reviews: data?.reviews,
        totalPages: data?.totalPages,
        reviewStat: data?.reviewStat,
        isError,
        status,
        isLoading,
        currentPage: parseInt(currentPage, 10),
        setCurrentPage
    };
}
export default useGetReviews