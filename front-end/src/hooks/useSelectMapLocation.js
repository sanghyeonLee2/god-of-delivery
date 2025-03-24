import { useQuery } from "react-query";
import { QUERY_KEYS } from "../constants/queryKeys";
import { API_URLS } from "../constants/urls";
import { authGetApi } from "../api/request";
import { useRecoilState } from "recoil";
import { coordsState } from "../recoil/map/atoms";

export const useSelectMapLocation = () => {
  const [coords, setCoords] = useRecoilState(coordsState);

  const onClickCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  };

  const { isLoading } = useQuery([QUERY_KEYS.LOCATION], () => authGetApi(API_URLS.USER.LOCATION), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  return { isLoading, coords, onClickCurrentLocation, setCoords };
};
