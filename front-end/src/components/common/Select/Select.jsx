import React from "react";

const Select = React.forwardRef(({children, defaultValue, name, onChange}, ref) => {
    return (
        <select name={name} ref={ref} onChange={onChange} defaultValue={defaultValue}>
            {children}
        </select>
    );
});

export default Select;
