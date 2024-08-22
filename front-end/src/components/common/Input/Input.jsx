import React from 'react';

function Input({type, id, register}) {
    return (
        <input type={type} id={id} {...register}/>
    );
}

export default Input;