import React from 'react';
import {useFormContext} from "react-hook-form";


function Radio({children, value, name, defaultChecked, disabled}) {
    const {register} = useFormContext()
    return (
        <label>
            <input
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
                {...register("addressType")}
            />
            {children}
        </label>
    );
}

export default Radio;