import React from 'react';
import {
    AddressBoxLeft,
    AddressBoxMiddle,
    AddressBoxOuter,
    AddressBoxRight,
    MiddleInner,
    RoadAddress
} from "./AddressBoxLayout";
import {P} from "../../../assets/styles/CommonStyle";
import addressLocation from "../../../assets/img/address_location.png"
import check from "../../../assets/img/check.png"
import {usePost} from "../../../hooks/usePost";

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
                        <P size={"large"}>{addressInfo.roadInfo}</P>
                    </RoadAddress>
                    <P size={"medium"}>{addressInfo.detailAddress}</P>
                    <P size={"small"}>{addressInfo.addressType}</P>
                    <P size={"x-small"}>{addressInfo.forRider}</P>
                </MiddleInner>
            </AddressBoxMiddle>
            <AddressBoxRight>
                <img src={check} width={24} alt={"체크"}/>
            </AddressBoxRight>
        </AddressBoxOuter>
    );
}

export default AddressBox;