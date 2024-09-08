import React from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {useRecoilState, useRecoilValue} from "recoil";
import {addressState, coordsState} from "../../../recoil/map/atoms";

function KakaoMap() {
    const address = useRecoilValue(addressState)
    const [coords, setCoords] = useRecoilState(coordsState)
    return (
        <Map
            center={coords.center}
            style={{width: '80%', height: '40%', margin: "0 auto"}}
            level={3}
            onClick={(_, e) => {
                const latLng = e.latLng
                setCoords(
                    {
                        center: {
                            lat: latLng.getLat(),
                            lng: latLng.getLng()
                        }, isPanto: false
                    }
                )
            }
            }>
            <MapMarker position={coords.center}/>
        </Map>
    );
}

export default KakaoMap;