import {useQuery} from "react-query";
import {authGetApi} from "../apis/api/user";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useSetRecoilState} from "recoil";
import {coordsState} from "../recoil/map/atoms";

export const useGetCoordsAndInitForm = (url) => {
    const setCoordsState = useSetRecoilState(coordsState)
    const {handleSubmit, control, register, reset, watch, getValues, setValue} = useForm();
    const {data, isError, status, isLoading} = useQuery(
        ["geCoords", url],
        () => authGetApi(url),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 신선한 데이터 유지
            cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
        }
    );

    useEffect(() => {
        if (data?.data) {
            reset(data.data);
            setCoordsState({
                lat: data.data.lat, lng: data.data.lng,
            })
        }
    }, [data, reset]);

    return {
        query: {data: data?.data, isError, status, isLoading},
        form: {register, setValue, handleSubmit},
    };
};
