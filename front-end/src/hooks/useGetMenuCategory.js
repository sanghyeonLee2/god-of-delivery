import { useQuery } from "react-query";
import { authGetApi } from "../api/request";
import { API_URLS } from "../constants/urls";
import { QUERY_KEYS } from "../constants/queryKeys";
import { useParams } from "react-router-dom";

export const useGetMenuCategory = () => {
  const params = useParams();
  const { menuId } = params;

  const { data, isLoading } = useQuery(
    [QUERY_KEYS.MENU_CATEGORY],
    () => authGetApi(API_URLS.MENU.OWNER.CATEGORY(menuId)),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
    }
  );

  return {
    isLoading,
    menuCategoryData: data?.data,
  };
};
