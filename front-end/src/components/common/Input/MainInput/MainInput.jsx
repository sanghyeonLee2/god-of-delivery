import React, {forwardRef} from 'react';
import {MainInputWrapper} from "./MainInputLayout";

const MainInput = forwardRef(({type, id, placeholder, register, registerName, defaultValue}, ref) => {
    return (
        <MainInputWrapper
            type={type}
            id={id}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...register(registerName)}
            ref={ref} // ✅ ref 전달
        />
    );
});

export default MainInput;
