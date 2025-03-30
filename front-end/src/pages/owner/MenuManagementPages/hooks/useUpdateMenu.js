import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPutApi } from "../../../../api/request";
import { API_URLS } from "../../../../constants/urls";
import { QUERY_KEYS } from "../../../../constants/queryKeys";
import { showSuccess } from "../../../../utils/toasts";
import { useFieldArray, useForm } from "react-hook-form";
import useCustomParams from "../../../../common-hooks/useCustomParams";
import { DEFAULT_CATEGORY } from "../../../../constants/formValues";
import { useNavigate } from "react-router-dom";

const useUpdateMenu = () => {
  const navigate = useNavigate();
  const { menuId } = useCustomParams();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(QUERY_KEYS.OWNER_MENU);
  const { register, reset, watch, control, handleSubmit } = useForm({
    defaultValues: cachedData?.data || {},
  });
  const { isLoading: isFetching } = useQuery(
    QUERY_KEYS.OWNER_MENU,
    () => authGetApi(API_URLS.MENU.OWNER.BY_ID(menuId)),
    {
      staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
      cacheTime: 1000 * 60 * 10,
      onSuccess: ({ data }) => reset(data),
    }
  );

  const {
    fields: categoryFields,
    append,
    remove: removeCategory,
  } = useFieldArray({
    control,
    name: "MenuCategories",
  });

  const { mutate: updateMenu, isLoading: isUpdating } = useMutation(
    (data = {}) => authPutApi(API_URLS.MENU.OWNER.BY_ID(menuId), data),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.OWNER_MENU);
        await queryClient.invalidateQueries(QUERY_KEYS.OWNER_MENUS);
        showSuccess("메뉴 정보를 수정 했습니다");
        navigate("owners/me/menus");
      },
    }
  );

  return {
    updateMenu: (data) => updateMenu(data),
    isUpdating,
    isFetching,
    form: {
      handleSubmit,
      control,
      register,
      categoryFields,
      appendCategory: () => {
        append(DEFAULT_CATEGORY);
      },
      removeCategory,
    },
  };
};

export default useUpdateMenu;
