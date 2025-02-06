import React from 'react';
import {MainInputWrapper} from "./MainInputLayout";
import {useFormContext} from "react-hook-form";

function MainInput({type, id, placeholder, reigterName}) {
    const {register} = useFormContext()
    return (
        <MainInputWrapper type={type} id={id} {...register(reigterName)} placeholder={placeholder}/>
    );
}

export default MainInput;