import React from 'react';
import MainInput from "../../../components/common/Input/MainInput/MainInput";
import {ErrorMsg} from "../../AuthPage/AuthPageFormLayout";
import {useFormContext} from "react-hook-form";
import {useRecoilValue} from "recoil";
import {addressState} from "../../../recoil/map/atoms";
import {Font} from "../../../assets/styles/CommonStyle";

function AddressInfo(props) {
    const {formState: {errors}} = useFormContext()
    const addressValue = useRecoilValue(addressState);
    return (
        <div>
            <Font>
                {addressValue?.roadInfo}
            </Font>
            <Font>
                {addressValue?.detailAddress}
            </Font>
            <MainInput type={"text"} placeholder={"상세주소를 입력해 주세요."} reigterName={"detailAddress"}/>
            <ErrorMsg>{errors.detailAddress?.message}</ErrorMsg>
        </div>
    );
}

export default AddressInfo;