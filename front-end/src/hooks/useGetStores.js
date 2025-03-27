import { useQuery } from "react-query";
import { authGetApi } from "../api/request";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../constants/queryKeys";
import { API_URLS } from "../constants/urls";
import { useForm } from "react-hook-form";
import { pageCalculator } from "../utils/calculator";
import { keywordIncludedUrl } from "../utils/transducer";
import useCustomQueryParams from "./useCustomQueryParams";
import useCustomParams from "./useCustomParams";
import QUERY_PARAMS_INIT from "../constants/queryParamsInit";

export const useGetStores = (isEnabled) => {
  const navigate = useNavigate();
  const { categoryId = "all" } = useCustomParams();
  const { page, keyword, sorting } = useCustomQueryParams(QUERY_PARAMS_INIT.STORES);

  const { data, isLoading } = useQuery(
    QUERY_KEYS.STORES({ page, keyword, sorting, categoryId }),
    () =>
      authGetApi(API_URLS.STORE.LIST, {
        params: {
          page,
          keyword,
          sorting,
        },
      }),
    {
      select: (res) => ({
        storesData: res.data?.storeList,
        totalPages: pageCalculator(res.data.totalItems),
      }),
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      enabled: isEnabled,
    }
  );
  const { handleSubmit, register } = useForm();

  const setKeyword = (newKeyword) => {
    navigate(`/stores/${categoryId}?page=1&sorting=${sorting}&keyword=${newKeyword.trim()}`);
  };

  const setCategory = (newCategoryId) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(`/stores/${newCategoryId}?page=1&sorting=${sorting}${hasKeyword}`);
  };

  const setPage = (newPage) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(`/stores/${categoryId}?page=${newPage}&sorting=${sorting}${hasKeyword}`);
  };

  const setSorting = (newSorting) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(`/stores/${categoryId}?page=${page}&sorting=${newSorting}${hasKeyword}`);
  };
  return {
    storesData: data?.storesData || [],
    totalPages: data?.totalPages,
    searchForm: {
      handleSubmit,
      register,
      urlKeyword: keyword,
    },
    setCategory,
    setPage,
    setSorting,
    setKeyword,
    isLoading,
    page,
    categoryId,
    sorting,
  };
};

export default useGetStores;
