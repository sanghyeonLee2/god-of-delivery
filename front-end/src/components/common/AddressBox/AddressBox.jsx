import React from 'react';
import {
    AddressBoxLeft,
    AddressBoxMiddle,
    AddressBoxOuter,
    AddressBoxRight,
    MiddleInner,
    RoadAddress
} from "./AddressBoxLayout";
import addressLocation from "../../../assets/img/address_location.png"
import check from "../../../assets/img/check.png"
import {usePost} from "../../../hooks/usePost";
import {Font} from "../../../assets/styles/CommonStyle";

//import addressHome from "../../../assets/img/home.png"


function AddressBox({addressInfo}) {
    const {mutate: setAddress} = usePost("auth/sign-in")
//폰트 크기, 색을 정해두고 props로 가변 폰트 컴포넌트로 만들자
    return (
        <AddressBoxOuter onClick={() => {
            console.log("asdf")
        }}>
            <AddressBoxLeft><img src={addressLocation} width={24} alt={"주소 위치"}/></AddressBoxLeft>
            <AddressBoxMiddle>
                <MiddleInner>
                    <RoadAddress>
                        <Font size={"large"}>{addressInfo.roadInfo}</Font>
                    </RoadAddress>
                    <Font>{addressInfo.detailAddress}</Font>
                    <Font size={"small"}>{addressInfo.addressType}</Font>
                    <Font size={"small"}>{addressInfo.forRider}</Font>
                </MiddleInner>
            </AddressBoxMiddle>
            <AddressBoxRight>
                <img src={check} width={24} alt={"체크"}/>
            </AddressBoxRight>
        </AddressBoxOuter>
    );
}

export default AddressBox;