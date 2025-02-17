import React from 'react';

function Option({text, value, name, defaultChecked, disabled}) {
    return (
        <option value={value}>
            {text}
        </option>
    );
}

export default Option;