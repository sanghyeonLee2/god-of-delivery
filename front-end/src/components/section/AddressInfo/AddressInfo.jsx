import React from 'react';
import MainInput from "../../common/Input/MainInput/MainInput";
import {ErrorMsg} from "../../forms/AuthPageForm/AuthPageFormLayout";
import Radio from "../../common/RadioGroup/Radio/Radio";
import RadioGroup from "../../common/RadioGroup/RadioGroup";
import {useFormContext} from "react-hook-form";
import {useRecoilValue} from "recoil";
import {addressState} from "../../../recoil/map/atoms";
import {AddressWrapper, RoadAddressWrapper} from "./AddresInfoLayout";

function AddressInfo(props) {
    const {formState: {errors}} = useFormContext()
    const addressValue = useRecoilValue(addressState);
    return (
        <>
            <RoadAddressWrapper>
                {addressValue?.roadAddress}
            </RoadAddressWrapper>
            <AddressWrapper>
                {addressValue?.addressName}
            </AddressWrapper>
            <MainInput type={"text"} placeholder={"상세주소를 입력해 주세요."} reigterName={"detailAddress"}/>
            <ErrorMsg>{errors.detailAddress?.message}</ErrorMsg>
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
        </>
    );
}

export default AddressInfo;