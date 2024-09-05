import React from 'react';
import {AddressWrapper, MapAddressWrapper, ModalOuter, ModalTop, RoadAddressWrapper} from "./SelectMapModalLayout";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import IconButton from "../../common/Button/icon/IconButton";
import SearchForm from "../../forms/SearchForm/SearchForm"
import KakaoMap from "../../section/KakaoMap/KakaoMap";
import {MainButton} from "../../common/Button/main/MainButton";
import {addressState} from "../../../recoil/map/atoms";

function SelectMapModal(props) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const addressValue = useRecoilValue(addressState)
    return (
        <ModalOuter>
            <IconButton type={"button"} onClick={() => setIsModalOpen(false)}/>
            <ModalTop>
                <SearchForm/>
            </ModalTop>
            <KakaoMap/>
            <MapAddressWrapper>
                <RoadAddressWrapper>
                    {addressValue?.roadAddress}
                </RoadAddressWrapper>
                <AddressWrapper>
                    {addressValue?.addressName}
                </AddressWrapper>
                <MainButton type={"button"} text={"등록"}/>
            </MapAddressWrapper>
        </ModalOuter>
    );
}

export default SelectMapModal;