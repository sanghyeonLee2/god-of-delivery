import React from 'react';


function Radio({children, value, name, defaultChecked, disabled, setValue}) {
    return (
        <label>
            <input
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={() => setValue(name, value)}
            />
            {children}
        </label>
    );
}

export default Radio;