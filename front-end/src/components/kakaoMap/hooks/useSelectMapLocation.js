import { useQuery } from "react-query";
import { QUERY_KEYS } from "@constants/queryKeys";
import { API_URLS } from "@constants/urls";
import { authGetApi } from "@api/request";
import { useRecoilState } from "recoil";
import { coordsState } from "@recoil/map/atoms";
import { useCallback } from "react";

export const useSelectMapLocation = () => {
  const [coords, setCoords] = useRecoilState(coordsState);

  const onClickCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, [setCoords]);

  const { isLoading } = useQuery([QUERY_KEYS.LOCATION], () => authGetApi(API_URLS.USER.LOCATION), {
    onSuccess: (res) => {
      const { lat, lng } = res.data;
      setCoords({ lat, lng });
    },
  });
  return { isLoading, coords, onClickCurrentLocation, setCoords };
};
