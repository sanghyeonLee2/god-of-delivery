import React from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {MapWrap} from "./KakaoMapLayout";
import IconBtn from "../common/Button/icon/IconBtn";
import Loading from "components/common/Loading/Loading";
import {useSelectMapLocation} from "../../hooks/useSelectMapLocation";
import {MdOutlineLocationSearching} from "react-icons/md";

function KakaoMap() {
    const {isLoading, onClickCurrentLocation, coords, setCoords} = useSelectMapLocation()

    if (isLoading) {
        return <Loading/>
    }
    return (
        <MapWrap>
            <Map
                center={coords}
                isPanto={true}
                style={{width: "80%", height: '100%', margin: "0 auto"}}
                level={3}
                onClick={(_, e) => {
                    const latLng = e.latLng
                    setCoords({
                        lat: latLng.getLat(),
                        lng: latLng.getLng()
                    })

                }}>
                <MapMarker position={coords}/>
            </Map>
            <IconBtn type={"button"} onClick={onClickCurrentLocation}>
                <MdOutlineLocationSearching size={35}/>
            </IconBtn>
        </MapWrap>
    );
}

export default KakaoMap;