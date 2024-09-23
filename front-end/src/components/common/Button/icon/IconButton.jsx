import {IconBtnWrap} from "./IconButtonLayout";
import React from 'react';
import reset from "../../../../assets/img/reset.png";

function IconButton({type, onClick}) {
    return (
        <IconBtnWrap type={type} onClick={onClick}>
            <img src={reset} width={28} alt={"닫기 버튼"}/>
        </IconBtnWrap>
    );
}

export default IconButton;