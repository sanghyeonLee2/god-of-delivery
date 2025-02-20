import React from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {useRecoilState} from "recoil";
import {coordsState} from "../../recoil/map/atoms";
import {CurrentLocationBtn, MapWrap} from "./KakaoMapLayout";
import locationImg from "../../assets/img/my_location.png"

function KakaoMap({mapWidth}) {
    const [coords, setCoords] = useRecoilState(coordsState)
    const onClickCoords = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            //console.log(`lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`)
            setCoords({center: {lat: position.coords.latitude, lng: position.coords.longitude}, isPanto: true})
        })
    }
    return (
        <MapWrap>
            <Map
                center={coords.center}
                style={{width: mapWidth, height: '100%', margin: "0 auto"}}
                level={3}
                onClick={(_, e) => {
                    const latLng = e.latLng
                    setCoords(
                        {
                            center: {
                                lat: latLng.getLat(),
                                lng: latLng.getLng()
                            }, isPanto: true
                        }
                    )
                }
                }>
                <MapMarker position={coords.center}/>
            </Map>
            <CurrentLocationBtn type={"button"} onClick={onClickCoords}>
                <img src={locationImg} width={35} alt={"위치 버튼"}/>
            </CurrentLocationBtn>
        </MapWrap>
    );
}

export default KakaoMap;