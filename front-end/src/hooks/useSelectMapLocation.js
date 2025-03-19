import {useQuery} from "react-query";
import {QUERY_KEYS} from "../constants/queryKeys";
import {API_URLS} from "../constants/urls";
import {authGetApi} from "../api/user";
import {useRecoilState} from "recoil";
import {coordsState} from "../recoil/map/atoms";

export const useSelectMapLocation = () => {
    const [coords, setCoords] = useRecoilState(coordsState)

    const onClickCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoords({lat: position.coords.latitude, lng: position.coords.longitude})
        })
    }

    const {isLoading} = useQuery(
        [QUERY_KEYS.COORDS, API_URLS.GET_COORDS],
        () => authGetApi(API_URLS.GET_COORDS),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
            cacheTime: 1000 * 60 * 10,
            onSuccess: (res) => {
                setCoords({lat: res.data.lat, lng: res.data.lng})
            }
        }
    );
    return {isLoading, coords, onClickCurrentLocation, setCoords};
}