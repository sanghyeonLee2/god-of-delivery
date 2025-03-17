import React from 'react';
import {FlexOnly} from "../../../../assets/styles/CommonStyle";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../../../../recoil/user/atoms";
import HeaderLocationBtn from "components/common/Header/components/HeaderLocationBtn";

function HeaderLocation(props) {
    const {address} = useRecoilValue(userInfoState)
    return (
        <FlexOnly>
            {address ? <HeaderLocationBtn text={address}/> : <HeaderLocationBtn text={"주소를 설정해 주세요"}/>}
        </FlexOnly>
    );
}

export default HeaderLocation;