import React from 'react';
import MainInput from "../../../components/common/Input/MainInput/MainInput";
import Select from "../../../components/common/Select/Select";
import Option from "../../../components/common/Select/options/Option";
import {Font} from "../../../assets/styles/CommonStyle";

function AdditionalAddress() {
    return (
        <>
            <div>
                <Font>라이더님께</Font>
                <Select>
                    <Option text={"문 앞에 두고 벨 눌러주세요."}/>
                    <Option text={"문 앞에 두고 노크 해주세요."}/>
                    <Option text={"문 앞에 두면 가져갈께요 (벨X,노크X)"}/>
                    <Option text={"직접 받을게요"}/>
                    <Option text={"전화주시면 마중 나갈게요"}/>
                    <Option text={"직접 입력"}/>
                </Select>
            </div>
            <div>
                <Font>길 안내</Font>
                <MainInput reigterName={"roadInfo"}/>
            </div>
        </>
    );
}

export default AdditionalAddress;