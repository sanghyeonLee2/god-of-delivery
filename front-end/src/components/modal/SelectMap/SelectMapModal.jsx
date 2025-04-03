import React from "react";
import LocationSearchForm from "./components/LocationSearchForm";
import AddressInfo from "./components/AddressInfo";
import SelectMapSubmitBtn from "@components/modal/SelectMap/components/SelectMapSubmitBtn";
import { useKakaoLoader } from "react-kakao-maps-sdk";
import Loading from "@components/common/Loading/Loading";
import { MapAddressWrap } from "@components/modal/SelectMap/SelectMapModal.styles";
import { ModalContentWrap } from "@components/modal/Modal.styles";
import KakaoMap from "@components/kakaoMap/KakaoMap";

function SelectMapModal() {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAO_API, // 발급 받은 APPKEY
    libraries: ["services"],
  });
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>카카오 api를 불러오는 중 에러 발생</div>;
  }
  return (
    <>
      <ModalContentWrap>
        <LocationSearchForm />
        <KakaoMap />
        <MapAddressWrap>
          <AddressInfo />
        </MapAddressWrap>
      </ModalContentWrap>
      <SelectMapSubmitBtn />
    </>
  );
}

export default SelectMapModal;
