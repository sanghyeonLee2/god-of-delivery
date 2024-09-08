import React from 'react';
import {AddressWrapper, MapAddressForm, ModalOuter, ModalTop, RoadAddressWrapper} from "./SelectMapModalLayout";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import IconButton from "../../common/Button/icon/IconButton";
import SearchForm from "../../forms/SearchForm/SearchForm"
import KakaoMap from "../../section/KakaoMap/KakaoMap";
import {MainButton} from "../../common/Button/main/MainButton";
import {addressState} from "../../../recoil/map/atoms";
import AdditionalAddress from "../../section/AdditionalAddressInfo/AdditionalAddress";
import MainInput from "../../common/Input/MainInput/MainInput";
import RadioGroup from "../../common/RadioGroup/RadioGroup";
import Radio from "../../common/RadioGroup/Radio/Radio";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addressValid} from "../../../validation/userSchema";
import {ErrorMsg} from "../../forms/AuthPageForm/AuthPageFormLayout";
import {useAuthPost} from "../../../hooks/usePost";

function SelectMapModal(props) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    const addressValue = useRecoilValue(addressState);
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
                    <RoadAddressWrapper>
                        {addressValue?.roadAddress}
                    </RoadAddressWrapper>
                    <AddressWrapper>
                        {addressValue?.addressName}
                    </AddressWrapper>
                    <MainInput type={"text"} placeholder={"상세주소를 입력해 주세요."} reigterName={"detailAddress"}/>
                    <ErrorMsg>{methods.formState.errors.detailAddress?.message}</ErrorMsg>
                    <RadioGroup>
                        <Radio name={"address-type"} value={"home"} defaultChecked>
                            우리집
                        </Radio>
                        <Radio name={"address-type"} value={"company"}>
                            회사
                        </Radio>
                        <Radio name={"address-type"} value={"direct"}>
                            직접 입력
                        </Radio>
                    </RadioGroup>
                    <AdditionalAddress/>
                    <MainButton type={"submit"} text={"등록"}/>
                </MapAddressForm>
            </FormProvider>
        </ModalOuter>
    );
}

export default SelectMapModal;
