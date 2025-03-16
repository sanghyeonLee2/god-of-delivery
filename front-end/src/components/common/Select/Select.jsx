import React from 'react';

function Select({children, onChange, defaultValue}) {
    return (
        <select onChange={onChange} defaultValue={defaultValue}>
            {children}
        </select>
    );
}

export default Select;