import React from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {useRecoilState} from "recoil";
import {MapWrap} from "./KakaoMapLayout";
import myLocation from "../../assets/img/my_location.png"
import {coordsState} from "../../recoil/map/atoms";
import IconBtn from "../common/Button/icon/IconBtn";

function KakaoMap() {
    const [coords, setCoords] = useRecoilState(coordsState)
    const onClickCoords = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoords({lat: position.coords.latitude, lng: position.coords.longitude})
        })
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
                    setCoords(
                        {
                            lat: latLng.getLat(),
                            lng: latLng.getLng()
                        }
                    )
                }
                }>
                <MapMarker position={coords}/>
            </Map>
            <IconBtn src={myLocation} type={"button"} width={35} onClick={onClickCoords}/>
        </MapWrap>
    );
}

export default KakaoMap;