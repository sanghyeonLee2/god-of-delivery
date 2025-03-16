import React from 'react';

function Option({text, value}) {
    return (
        <option value={value}>
            {text}
        </option>
    );
}

export default Option;