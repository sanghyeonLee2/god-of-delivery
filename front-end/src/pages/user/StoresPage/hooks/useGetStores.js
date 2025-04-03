import { useQuery } from "react-query";
import { authGetApi } from "@api/request";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@constants/queryKeys";
import { API_URLS } from "@constants/urls";
import { useForm } from "react-hook-form";
import { pageCalculator } from "@utils/calculator";
import { keywordIncludedUrl } from "@utils/transducer";
import useCustomQueryParams from "@hooks/useCustomQueryParams";
import QUERY_PARAMS_INIT from "@constants/queryParamsInit";
import useCustomParams from "@hooks/useCustomParams";

export const useGetStores = (isEnabled) => {
  const navigate = useNavigate();
  const { categoryId = "all" } = useCustomParams();
  const { page, keyword, sorting } = useCustomQueryParams(QUERY_PARAMS_INIT.STORES);

  const { data, isLoading } = useQuery(
    QUERY_KEYS.STORES({ page, keyword, sorting, categoryId }),
    () =>
      authGetApi(API_URLS.STORE.LIST(categoryId), {
        params: {
          page,
          keyword,
          sorting,
          categoryId,
        },
      }),
    {
      select: (res) => ({
        storesData: res.data?.storeList,
        totalPages: pageCalculator(res.data.totalItems),
      }),
      enabled: isEnabled,
    }
  );
  const { handleSubmit, register } = useForm();

  const setKeyword = (newKeyword) => {
    navigate(`/stores/${categoryId}?keyword=${newKeyword.trim()}`);
  };

  const setCategory = (newCategoryId) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(`/stores/${newCategoryId}?${hasKeyword}`);
  };

  const setPage = (newPage) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(`?page=${newPage}&sorting=${sorting}${hasKeyword}`);
  };

  const setSorting = (newSorting) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(`?sorting=${newSorting}${hasKeyword}`);
  };
  return {
    storesData: data?.storesData,
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
