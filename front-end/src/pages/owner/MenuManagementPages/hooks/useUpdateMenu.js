import { useMutation, useQuery, useQueryClient } from "react-query";
import { authGetApi, authPutApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { QUERY_KEYS } from "@constants/queryKeys";
import { showSuccess } from "@utils/toasts";
import { useFieldArray, useForm } from "react-hook-form";
import { DEFAULT_CATEGORY } from "@constants/formValues";
import { useNavigate } from "react-router-dom";
import useCustomParams from "@hooks/useCustomParams";
import { SUCCESS_MESSAGES } from "@constants/messages";

const useUpdateMenu = () => {
  const navigate = useNavigate();
  const { menuId } = useCustomParams();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(QUERY_KEYS.OWNER_MENU);
  const { register, reset, control, handleSubmit } = useForm({
    defaultValues: cachedData?.data || {},
  });
  const { isLoading: isFetching } = useQuery(
    QUERY_KEYS.OWNER_MENU,
    () => authGetApi(API_URLS.MENU.OWNER.BY_ID(menuId)),
    {
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
        showSuccess(SUCCESS_MESSAGES.MENU_UPDATED);
        navigate("/owners/me/menus");
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
