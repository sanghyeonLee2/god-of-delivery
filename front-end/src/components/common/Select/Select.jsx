import React from "react";

const Select = React.forwardRef(({children, defaultValue, name}, ref) => {
    return (
        <select name={name} ref={ref} defaultValue={defaultValue}>
            {children}
        </select>
    );
});

export default Select;
