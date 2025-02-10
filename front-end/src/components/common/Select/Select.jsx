import React from 'react';

function Select({children, onChange}) {
    return (
        <select onChange={onChange}>
            {children}
        </select>
    );
}

export default Select;