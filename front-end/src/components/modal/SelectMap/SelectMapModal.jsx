import React from 'react';
import {MapAddressForm} from "./SelectMapModalLayout";
import LocationSearchForm from "../../forms/SearchForm/LocationSearchForm"
import {ModalBtn} from "../../common/Button/main/MainButton";
import {usePost} from "../../../hooks/usePost";
import AddressInfo from "./AddressInfo";
import {ModalContentWrap} from "../ModalLayout";
import {useKakaoLoader} from "react-kakao-maps-sdk";
import Loading from "../../common/Loading/Loading";
import KakaoMap from "../../kakaoMap/KakaoMap";
import {useGetCoordsAndInitForm} from "../../../hooks/useGetCoordsAndInitForm";

function SelectMapModal(props) {
    const {query, form} = useGetCoordsAndInitForm("coords")
    const {mutate: onAddressRegister} = usePost("address", true)
    const [loading, error] = useKakaoLoader({
        appkey: process.env.REACT_APP_KAKAO_API, // 발급 받은 APPKEY
        libraries: ["services"],
    })

    if (query.isLoading) {
        return <Loading/>
    }
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
                    <AddressInfo setValue={form.setValue}/>
                </MapAddressForm>
            </ModalContentWrap>
            <ModalBtn onClick={form.handleSubmit((data) =>
                onAddressRegister(data)
            )} text={"등록"}/>
        </>
    );
}

export default SelectMapModal;
