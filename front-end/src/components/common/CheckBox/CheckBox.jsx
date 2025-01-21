import React from 'react';

function CheckBox({children, name, onChange}) {

    return (
        <label>
            <input type={'checkbox'}
                   name={name}
                   onChange={onChange}
            />
            {children}
        </label>
    );
}

export default CheckBox;