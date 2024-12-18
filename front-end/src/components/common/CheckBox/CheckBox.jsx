import React from 'react';

function CheckBox({children, value, name, getValues, setValue, maxQuantity}) {
    const currentValues = getValues(name) || [];
    return (
        <label>
            <input type={'checkbox'}
                   name={name}
                   onChange={(e) => {
                       const isChecked = e.target.checked;
                       if (isChecked && getValues(name).length >= maxQuantity) {
                           e.target.checked = false
                           return
                       }
                       if (isChecked) {
                           return setValue(name, [...currentValues, value])
                       }
                       return setValue(name, currentValues.filter((item) => item.content !== value.content))
                   }}
            />
            {children}
        </label>
    );
}

export default CheckBox;