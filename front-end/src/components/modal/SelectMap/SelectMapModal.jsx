import React from 'react';
import {MapAddressForm} from "./SelectMapModalLayout";
import LocationSearchForm from "../../forms/SearchForm/LocationSearchForm"
import AddressInfo from "./AddressInfo";
import {ModalContentWrap} from "../ModalLayout";
import KakaoMap from "../../kakaoMap/KakaoMap";
import SelectMapSubmitBtn from "components/modal/SelectMap/SelectMapSubmitBtn";
import {useKakaoLoader} from "react-kakao-maps-sdk";
import Loading from "components/common/Loading/Loading";

function SelectMapModal(props) {
    const [loading, error] = useKakaoLoader({
        appkey: process.env.REACT_APP_KAKAO_API, // 발급 받은 APPKEY
        libraries: ["services"],
    })
    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <div>카카오 api를 불러오는 중 에러 발생</div>
    }
    return (
        <>
            <ModalContentWrap>
                <LocationSearchForm/>
                <KakaoMap/>
                <MapAddressForm>
                    <AddressInfo/>
                </MapAddressForm>
            </ModalContentWrap>
            <SelectMapSubmitBtn/>
        </>
    );
}

export default SelectMapModal;
