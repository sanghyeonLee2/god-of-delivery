import { useMutation, useQueryClient } from "react-query";
import { authDeleteApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { showSuccess } from "@utils/toasts";
import { QUERY_KEYS } from "@constants/queryKeys";

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();

  return useMutation((menuId) => authDeleteApi(API_URLS.MENU.OWNER.BY_ID(menuId)), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.OWNER_MENUS);
      showSuccess("메뉴를 삭제 했습니다");
    },
  });
};
