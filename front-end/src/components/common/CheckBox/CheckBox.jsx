import React from 'react';

function CheckBox({children, name, onChange, checked}) {

    return (
        <label>
            <input type={'checkbox'}
                   name={name}
                   onChange={onChange}
                   checked={checked}
            />
            {children}
        </label>
    );
}

export default CheckBox;