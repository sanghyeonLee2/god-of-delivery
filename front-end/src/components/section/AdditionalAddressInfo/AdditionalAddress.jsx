import React from 'react';
import {AddAddressSection, AddAddressWrap} from "./AdditionalAddressLayout";
import MainInput from "../../common/Input/MainInput/MainInput";
import Select from "../../common/Select/Select";
import Option from "../../common/Select/options/Option";

function AdditionalAddress() {
    return (
        <AddAddressWrap>
            <AddAddressSection>
                <p>라이더님께</p>
                <Select>
                    <Option text={"문 앞에 두고 벨 눌러주세요."}/>
                    <Option text={"문 앞에 두고 노크 해주세요."}/>
                    <Option text={"문 앞에 두면 가져갈께요 (벨X,노크X)"}/>
                    <Option text={"직접 받을게요"}/>
                    <Option text={"전화주시면 마중 나갈게요"}/>
                    <Option text={"직접 입력"}/>
                </Select>
            </AddAddressSection>
            <AddAddressSection>
                <p>길 안내</p>
                <MainInput reigterName={"roadInfo"}/>
            </AddAddressSection>
        </AddAddressWrap>
    );
}

export default AdditionalAddress;