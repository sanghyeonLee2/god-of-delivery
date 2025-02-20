import React from 'react';

function Option({text, value, name, defaultChecked, disabled}) {
    return (
        <option>
            {text}
        </option>
    );
}

export default Option;