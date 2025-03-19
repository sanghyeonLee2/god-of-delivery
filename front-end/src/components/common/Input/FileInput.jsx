import React, {forwardRef} from 'react';
import {FileInputElement} from "components/common/Input/FileInputLayout";

const FileInput = forwardRef(({type, name, placeholder, onClick, register, defaultValue}, ref) => {
    return (
        <FileInputElement type={"file"}
                          defaultValue={defaultValue}
                          placeholder={placeholder}
                          onClick={onClick}
                          ref={ref}
                          {...register(name)}
        />
    );
})

export default FileInput;