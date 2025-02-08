import {IconBtnWrap} from "./IconBtnLayout";
import React from 'react';

function IconBtn({children, type, onClick, src, width}) {
    return (
        <IconBtnWrap type={type} onClick={onClick} width={width}>
            <img src={src} width={width} alt={src}/>
            {children}
        </IconBtnWrap>
    );
}

export default IconBtn;