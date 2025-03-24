import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { authGetApi, authPutApi } from "../api/request";
import { API_URLS } from "../constants/urls";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../recoil/user/atoms";
import { showSuccess } from "../utils/toasts";
import { useNavigate } from "react-router-dom";

export const useOwnerStore = () => {
  const navigate = useNavigate();
  const { userId } = useRecoilValue(userInfoState);
  const { data, isLoading } = useQuery([userId], () => authGetApi(API_URLS.STORE.OWNER_STORE), {
    staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
    cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
  });

  const { register, getValues, handleSubmit } = useForm();

  const { mutate: updateStore, isLoading: isUpdating } = useMutation(
    () => authPutApi(API_URLS.STORE.OWNER_STORE, getValues()),
    {
      onSuccess: () => {
        showSuccess("가게 정보를 수정했습니다");
        navigate("/owners/me");
      },
    }
  );

  return {
    storeData: data?.data,
    isUpdating,
    handleSubmit: handleSubmit(() => updateStore()),
    isLoading,
    register,
  };
};
