import { useQuery } from "react-query";
import { getApi } from "../api/user";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { QUERY_KEYS } from "../constants/queryKeys";
import { API_URLS } from "../constants/urls";
import { useForm } from "react-hook-form";
import { pageCalculator } from "../utils/calculator";
import { keywordIncludedUrl } from "../utils/transducer";

export const useGetStores = (isEnabled) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryId = "all" } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page") || 1;
  const keyword = queryParams.get("keyword");
  const sorting = queryParams.get("sorting") || "basicAsc";
  const GET_STORES_URL = API_URLS.GET_STORES({
    categoryId,
    page,
    sorting,
    keyword,
  });

  const { data, isLoading } = useQuery(
    [QUERY_KEYS.STORES, GET_STORES_URL],
    () => getApi(GET_STORES_URL),
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
    navigate(
      `/stores/${categoryId}?page=1&sorting=${sorting}&keyword=${newKeyword}`
    );
  };

  const setCategory = (newCategoryId) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(`/stores/${newCategoryId}?page=1&sorting=${sorting}${hasKeyword}`);
  };

  const setPage = (newPage) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(
      `/stores/${categoryId}?page=${newPage}&sorting=${sorting}${hasKeyword}`
    );
  };

  const setSorting = (newSorting) => {
    const hasKeyword = keywordIncludedUrl(keyword);
    navigate(
      `/stores/${categoryId}?page=${page}&sorting=${newSorting}${hasKeyword}`
    );
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
    page: parseInt(page, 10),
    categoryId,
    sorting,
  };
};

export default useGetStores;
