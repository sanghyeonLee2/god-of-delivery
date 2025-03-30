import { useQuery } from "react-query";
import { authGetApi } from "../../../../api/request";
import { API_URLS } from "../../../../constants/urls";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { useNavigate } from "react-router-dom";

export const useGetOwnerStoreMenus = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    QUERY_KEYS.OWNER_MENUS,
    () => authGetApi(API_URLS.MENU.OWNER.BASE),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
      cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
    }
  );
  return {
    menuData: data?.data || [],
    isLoading,
    navigateCreateMenu: () => navigate("create"),
  };
};
