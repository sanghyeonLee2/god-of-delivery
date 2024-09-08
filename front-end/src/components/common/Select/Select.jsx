import React from 'react';
import {SelectWrapper} from "./SelectLayout";
import {useFormContext} from "react-hook-form";

function Select({children}) {
    const {register} = useFormContext()
    return (
        <SelectWrapper {...register("forRider")}>
            {children}
        </SelectWrapper>
    );
}

export default Select;