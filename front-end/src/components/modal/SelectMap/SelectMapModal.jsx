import React from 'react';
import {MapAddressForm} from "./SelectMapModalLayout";
import SearchForm from "../../forms/SearchForm/SearchForm"
import KakaoMap from "../../kakaoMap/KakaoMap";
import {SubBtn} from "../../common/Button/main/MainButton";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addressValid} from "../../../validation/userSchema";
import {usePost} from "../../../hooks/usePost";
import AddressInfo from "../../../pages/SelectAddressPage/components/AddressInfo";
import {ModalContentWrap} from "../ModalLayout";

function SelectMapModal(props) {
    const methods = useForm({
        mode: "onBlur",
        resolver: yupResolver(addressValid),
    });
    const {mutate: onAddressRegister} = usePost("address", true)
    return (
        <>
            <ModalContentWrap>
                <SearchForm/>
                <KakaoMap/>
                <FormProvider {...methods}>
                    <MapAddressForm onSubmit={methods.handleSubmit((data) =>
                        onAddressRegister(data)
                    )}>
                        <AddressInfo/>
                    </MapAddressForm>
                </FormProvider>
            </ModalContentWrap>
            <SubBtn type={"submit"} text={"등록"} height={"10%"}/>
        </>
    );
}

export default SelectMapModal;
