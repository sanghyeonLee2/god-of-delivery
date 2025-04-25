import { useMutation, useQueryClient } from "react-query";
import { authPatchApi } from "@api/request";
import { API_URLS } from "@constants/urls";
import { useRecoilValueLoadable } from "recoil";
import { addressState } from "@recoil/map/atoms";
import { showSuccess } from "@utils/toasts";
import { QUERY_KEYS } from "@constants/queryKeys";
import useCloseModal from "@hooks/useCloseModal";
import { SUCCESS_MESSAGES } from "@constants/messages";

export const usePatchAddress = () => {
  const queryClient = useQueryClient();
  const closeModal = useCloseModal();
  const addresses = useRecoilValueLoadable(addressState);
  const { mutate: updateAddress, isLoading: isUpdatingAddress } = useMutation(
    () =>
      authPatchApi(API_URLS.USER.ADDRESS, {
        address: addresses.contents?.address,
        lat: addresses.contents?.lat,
        lng: addresses.contents?.lng,
      }),
    {
      onSuccess: async () => {
        showSuccess(SUCCESS_MESSAGES.ADDRESS_REGISTERED);
        await queryClient.invalidateQueries(QUERY_KEYS.ME);
        closeModal();
      },
    }
  );

  return {
    updateAddress,
    isUpdatingAddress,
    addressesState: addresses.state,
  };
};
