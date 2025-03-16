import React from 'react';
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../../recoil/flag/atoms";
import {ModalHeaderWrap} from "./ModalComponentsLayout";
import reset from "../../../../assets/img/reset.png"
import {Font} from "../../../../assets/styles/CommonStyle";

function ModalHeader({title}) {
    const setIsModalClose = useSetRecoilState(isModalOpenState)
    return (
        <ModalHeaderWrap>
            <Font size={"large"}>{title}</Font>
            <img src={reset} alt={"닫기"} width={35}
                 onClick={() => setIsModalClose({modalType: "", flag: false, modalData: null})}/>
        </ModalHeaderWrap>
    );
}

export default ModalHeader;