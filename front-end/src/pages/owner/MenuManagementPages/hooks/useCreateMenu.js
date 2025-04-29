import { useMutation, useQueryClient } from "react-query";
import { authPostApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { QUERY_KEYS } from "@constants/queryKeys";
import { showSuccess } from "@utils/toasts";
import { useFieldArray, useForm } from "react-hook-form";
import { DEFAULT_CATEGORY, DEFAULT_VALUES } from "@constants/formValues";
import { useNavigate } from "react-router-dom";
import { SUCCESS_MESSAGES } from "@constants/messages";

const useCreateMenu = () => {
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm({
    defaultValues: DEFAULT_VALUES.MENU_MANAGEMENT,
  });
  const {
    fields: categoryFields,
    append,
    remove: removeCategory,
  } = useFieldArray({
    control,
    name: "MenuCategories",
  });

  const queryClient = useQueryClient();
  const { mutate: createMenu, isLoading: isCreating } = useMutation(
    (data = {}) => authPostApi(API_URLS.MENU.OWNER.BASE, data),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.OWNER_MENU);
        await queryClient.invalidateQueries(QUERY_KEYS.OWNER_MENUS);
        showSuccess(SUCCESS_MESSAGES.MENU_ADDED);
        navigate("/owners/me/menus");
      },
    }
  );
  return {
    createMenu: (data) => createMenu(data),
    isCreating,
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

export default useCreateMenu;
