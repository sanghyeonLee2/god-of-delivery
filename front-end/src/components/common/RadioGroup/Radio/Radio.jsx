import React from 'react';


function Radio({children, value, name, checked, onChange}) {
    return (
        <label>
            <input
                type="radio"
                value={value}
                name={name}
                onChange={onChange}
                checked={checked}
            />
            {children}
        </label>
    );
}

export default Radio;
