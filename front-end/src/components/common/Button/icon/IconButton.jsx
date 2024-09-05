import React from 'react';
import {IconButtonWrapper} from "./IconButtonLayout";
import reset from "../../../../assets/img/reset.png";

function IconButton({type, onClick}) {
    return (
        <IconButtonWrapper type={type} onClick={onClick}>
            <img src={reset} width={40} alt={"닫기 버튼"}/>
        </IconButtonWrapper>
    );
}

export default IconButton;