import React from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {MapWrap} from "./KakaoMapLayout";
import myLocation from "../../assets/img/my_location.png"
import IconBtn from "../common/Button/icon/IconBtn";
import Loading from "components/common/Loading/Loading";
import {useSelectMapLocation} from "../../hooks/useSelectMapLocation";

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
            <IconBtn src={myLocation} type={"button"} width={35} onClick={onClickCurrentLocation}/>
        </MapWrap>
    );
}

export default KakaoMap;