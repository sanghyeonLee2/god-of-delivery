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
import { useCallback } from "react";
import { showError } from "@utils/toasts";
import useOpenModal from "@hooks/useOpenModal";
import { MODAL_TYPES } from "@constants/modalTypes";
import { errorHandler } from "@utils/errorHandler";
import { ERROR_MESSAGES } from "@constants/messages";

export const useGetStores = (isEnabled) => {
  const navigate = useNavigate();
  const openModal = useOpenModal();
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
        },
      }),

    {
      onError: (err) => {
        if (err.status === 422) {
          navigate("/");
          showError(ERROR_MESSAGES.ADDRESS_REQUIRED);
          return openModal(MODAL_TYPES.SELECT_ADDRESS);
        }
        return errorHandler(err);
      },
      select: (res) => ({
        storesData: res.data?.storeList,
        totalPages: pageCalculator(res.data.totalItems),
      }),
      enabled: isEnabled,
    }
  );
  const { handleSubmit, register } = useForm();

  const setKeyword = useCallback(
    (newKeyword) => {
      navigate(`/stores/${categoryId}?keyword=${newKeyword.trim()}`);
    },
    [navigate, categoryId]
  );

  const setCategory = useCallback(
    (newCategoryId) => {
      const hasKeyword = keywordIncludedUrl(keyword);
      navigate(`/stores/${newCategoryId}?${hasKeyword}`);
    },
    [navigate, keyword]
  );

  const setPage = useCallback(
    (newPage) => {
      const hasKeyword = keywordIncludedUrl(keyword);
      navigate(`?page=${newPage}&sorting=${sorting}${hasKeyword}`);
    },
    [navigate, keyword, sorting]
  );

  const setSorting = useCallback(
    (newSorting) => {
      const hasKeyword = keywordIncludedUrl(keyword);
      navigate(`?sorting=${newSorting}${hasKeyword}`);
    },
    [navigate, keyword]
  );
  return {
    storesData: data?.storesData,
    totalPages: data?.totalPages,
    searchForm: {
      handleSubmit,
      register,
      urlKeyword: keyword,
      onSubmit: ({ keyword }) => setKeyword(keyword),
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
