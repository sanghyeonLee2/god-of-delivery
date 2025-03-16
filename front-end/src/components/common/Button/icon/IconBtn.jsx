import {IconBtnWrap} from "./IconBtnLayout";
import React from 'react';

function IconBtn({type, onClick, src, width}) {
    return (
        <IconBtnWrap type={type} onClick={onClick}>
            <img src={src} width={width} alt={src}/>
        </IconBtnWrap>
    );
}

export default IconBtn;