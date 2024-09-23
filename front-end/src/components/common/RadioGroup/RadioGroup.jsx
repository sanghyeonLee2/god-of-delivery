import React from 'react';
import {AddressTypeWrapper} from "./RadioGroupLayout";

function RadioGroup({children}) {
    return (
        <AddressTypeWrapper>
            {children}
        </AddressTypeWrapper>
    );
}

export default RadioGroup;