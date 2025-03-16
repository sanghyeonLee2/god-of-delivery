import React from 'react';
import IconBtn from "components/common/Button/icon/IconBtn";
import location_on from "../../../../assets/img/location_on.png";
import {FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../../recoil/flag/atoms";
import {userInfoState} from "../../../../recoil/user/atoms";

function HeaderLocation(props) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const {address} = useRecoilValue(userInfoState)
    return (
        <FlexOnly>
            <IconBtn src={location_on} width={26} onClick={
                () => {
                    setIsModalOpen({modalType: "주소설정", flag: true, modalData: null})
                }}>
                {address ? <Font>{address}</Font> : <Font size={"small"}>주소를 설정해 주세요</Font>}
            </IconBtn>
        </FlexOnly>
    );
}

export default HeaderLocation;