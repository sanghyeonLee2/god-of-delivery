import React, {forwardRef} from 'react';

const Input = forwardRef(({type, id, placeholder, onClick, register}, ref) => {
    return (
        <input type={type}
               id={id}
               placeholder={placeholder}
               onClick={onClick}
               ref={ref}
               {...register}
        />
    );
})

export default Input;