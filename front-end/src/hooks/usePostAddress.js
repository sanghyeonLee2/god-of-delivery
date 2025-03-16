import {useMutation} from "react-query";
import {authPostApi} from "../apis/api/user";
import {API_URLS} from "../apis/constants/urls";
import {useRecoilValueLoadable} from "recoil";
import {addressState} from "../recoil/map/atoms";

export const usePostAddress = () => {
    const addresses = useRecoilValueLoadable(addressState);
    const {mutate: handlePostAddress, isLoading: isPostingAddress} = useMutation(
        () => authPostApi(API_URLS.POST_ADDRESS, {
                address: addresses.contents?.address,
                lat: addresses.contents?.lat,
                lng: addresses.contents?.lng,
            }
        ), {
            onSuccess: () => {
                alert("주소가 등록되었습니다.")
            }
        }
    )

    return {
        handlePostAddress, isPostingAddress, addressesState: addresses.state
    };
};
