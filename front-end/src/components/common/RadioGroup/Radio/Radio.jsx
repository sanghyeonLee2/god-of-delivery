import React from 'react';


function Radio({children, value, name, checked, onChange, defaultChecked}) {
    return (
        <label>
            <input
                type="radio"
                defaultChecked={defaultChecked}
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
