import React from 'react';
import {MapAddressForm, ModalOuter, ModalTop} from "./SelectMapModalLayout";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import IconButton from "../../common/Button/icon/IconButton";
import SearchForm from "../../forms/SearchForm/SearchForm"
import KakaoMap from "../../section/KakaoMap/KakaoMap";
import {MainButton} from "../../common/Button/main/MainButton";
import AdditionalAddress from "../../section/AdditionalAddressInfo/AdditionalAddress";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addressValid} from "../../../validation/userSchema";
import {useAuthPost} from "../../../hooks/usePost";
import AddressInfo from "../../section/AddressInfo/AddressInfo";

function SelectMapModal(props) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    const methods = useForm({
        mode: "onBlur",
        resolver: yupResolver(addressValid),
    });
    const {mutate: onAddressRegister} = useAuthPost("customer/address")
    return (
        <ModalOuter>
            <IconButton type={"button"} onClick={() => setIsModalOpen(false)}/>
            <ModalTop>
                <SearchForm/>
            </ModalTop>
            <KakaoMap/>
            <FormProvider {...methods}>
                <MapAddressForm onSubmit={methods.handleSubmit((data) => onAddressRegister(data))}>
                    <AddressInfo/>
                    <AdditionalAddress/>
                    <MainButton type={"submit"} text={"등록"}/>
                </MapAddressForm>
            </FormProvider>
        </ModalOuter>
    );
}

export default SelectMapModal;
