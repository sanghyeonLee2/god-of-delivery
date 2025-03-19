import {useMutation} from "react-query";
import {authPostApi} from "../api/user";
import {API_URLS} from "../constants/urls";
import {useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {addressState} from "../recoil/map/atoms";
import {isModalOpenState} from "../recoil/flag/atoms";
import {showSuccess} from "../utils/toasts";

export const usePostAddress = () => {
    const addresses = useRecoilValueLoadable(addressState);
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    const {mutate: handlePostAddress, isLoading: isPostingAddress} = useMutation(
        () => authPostApi(API_URLS.POST_ADDRESS, {
                address: addresses.contents?.address,
                lat: addresses.contents?.lat,
                lng: addresses.contents?.lng,
            }
        ), {
            onSuccess: () => {
                showSuccess("주소가 등록 되었습니다");
                setIsModalOpen({flag: false, modalData: null, modalType: ""})
            }
        }
    )

    return {
        handlePostAddress, isPostingAddress, addressesState: addresses.state
    };
};
