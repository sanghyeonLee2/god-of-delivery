import React, {forwardRef} from 'react';

const Input = forwardRef(({type, id, placeholder, onClick, register, defaultValue, disabled}, ref) => {
    return (
        <input type={type}
               id={id}
               defaultValue={defaultValue}
               placeholder={placeholder}
               onClick={onClick}
               ref={ref}
               disabled={disabled}
               {...register}
        />
    );
})

export default Input;