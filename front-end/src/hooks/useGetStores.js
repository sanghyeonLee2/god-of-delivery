import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

export const useGetStores = (url) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {categoryId = "all"} = useParams();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = queryParams.get('currentPage') || 1;
    const sorting = queryParams.get('sorting') || 'basicAsc';
    const apiUrl = `${url}/${categoryId}/${currentPage}/${sorting}`;

    const {data, isError, status, isLoading, refetch} = useQuery(
        ["getStoresData", categoryId, currentPage, sorting],
        () => getApi(apiUrl),
        {
            select: (res) => ({
                storesData: res.data.storeList,
                totalPages: Math.ceil(res.data.totalItems / res.data.pageSize),
            }),
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 10
        }
    );

    const setCategory = (newCategoryId) => {
        navigate(`/stores/${newCategoryId}?currentPage=1&sorting=${sorting}`);
    };

    const setCurrentPage = (newPage) => {
        navigate(`/stores/${categoryId}?currentPage=${newPage}&sorting=${sorting}`);
    };

    const setSorting = (newSorting) => {
        navigate(`/stores/${categoryId}?currentPage=${currentPage}&sorting=${newSorting}`);
    };

    useEffect(() => {
        refetch();
    }, [categoryId, currentPage, sorting]);

    return {
        storesData: data?.storesData,
        totalPages: data?.totalPages,
        setCategory,
        setCurrentPage,
        setSorting,
        isError,
        isLoading,
        currentPage: parseInt(currentPage, 10),
        categoryId,
        sorting,
    };
};

export default useGetStores;
