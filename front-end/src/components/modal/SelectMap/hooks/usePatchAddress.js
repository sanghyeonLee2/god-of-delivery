import { useMutation, useQueryClient } from "react-query";
import { authPatchApi } from "../../../../api/request";
import { API_URLS } from "../../../../constants/urls";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { addressState } from "../../../../recoil/map/atoms";
import { isModalOpenState } from "../../../../recoil/flag/atoms";
import { showSuccess } from "../../../../utils/toasts";
import { QUERY_KEYS } from "../../../../constants/queryKeys";

export const usePatchAddress = () => {
  const queryClient = useQueryClient();
  const addresses = useRecoilValueLoadable(addressState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const { mutate: handlePostAddress, isLoading: isPostingAddress } = useMutation(
    () =>
      authPatchApi(API_URLS.USER.ADDRESS, {
        address: addresses.contents?.address,
        lat: addresses.contents?.lat,
        lng: addresses.contents?.lng,
      }),
    {
      onSuccess: async () => {
        showSuccess("주소가 등록 되었습니다");
        await queryClient.invalidateQueries([QUERY_KEYS.ME]);
        setIsModalOpen({ flag: false, modalData: null, modalType: "" });
      },
    }
  );

  return {
    handlePostAddress,
    isPostingAddress,
    addressesState: addresses.state,
  };
};
