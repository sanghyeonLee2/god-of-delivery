import React from 'react';
import MainInput from "../../../components/common/Input/MainInput/MainInput";
import {ErrorMsg} from "../../AuthPage/AuthPageFormLayout";
import Radio from "../../../components/common/RadioGroup/Radio/Radio";
import RadioGroup from "../../../components/common/RadioGroup/RadioGroup";
import {useFormContext} from "react-hook-form";
import {useRecoilValue} from "recoil";
import {addressState} from "../../../recoil/map/atoms";
import {AddressInfoWrap, AddressP, RoadAddressStrong} from "./AddressInfoLayout";

function AddressInfo(props) {
    const {formState: {errors}} = useFormContext()
    const addressValue = useRecoilValue(addressState);
    return (
        <AddressInfoWrap>
            <RoadAddressStrong>
                {addressValue?.roadInfo}
            </RoadAddressStrong>
            <AddressP>
                {addressValue?.detailAddress}
            </AddressP>
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
        </AddressInfoWrap>
    );
}

export default AddressInfo;