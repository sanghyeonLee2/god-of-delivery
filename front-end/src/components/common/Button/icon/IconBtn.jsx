import React, {forwardRef} from 'react';
import {IconBtnWrap} from "./IconBtnLayout";

const IconBtn = forwardRef(({children, type, onClick, src, width, isDisable}, ref) => {
    return (
        <IconBtnWrap type={type} onClick={onClick} $isDisable={isDisable} ref={ref}>
            <img src={src} width={width} alt={src}/>
            {children}
        </IconBtnWrap>
    );
});

export default IconBtn;
