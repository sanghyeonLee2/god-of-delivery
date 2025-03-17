import {IconBtnWrap} from "./IconBtnLayout";
import React, {forwardRef} from 'react';

const IconBtn = forwardRef(({children, type, onClick, src, width, isDisable}, ref) => {
    return (
        <IconBtnWrap type={type} onClick={onClick} $isDisable={isDisable} ref={ref}>
            {children}
        </IconBtnWrap>
    );
});

export default IconBtn;