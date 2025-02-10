import {IconBtnWrap} from "./IconBtnLayout";
import React from 'react';

function IconBtn({children, type, onClick, src, width, isDisable}) {
    return (
        <IconBtnWrap type={type} onClick={onClick} width={width} $isDisable={isDisable}>
            <img src={src} width={width} alt={src}/>
            {children}
        </IconBtnWrap>
    );
}

export default IconBtn;