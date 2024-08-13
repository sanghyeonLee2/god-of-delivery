import React from 'react';
import {ButtonLayout} from "./ButtonLayout";

export function Button({type, text, onClick}) {
    return (
        <ButtonLayout type={type} onClick={onClick}>
            <span> {text}</span>
        </ButtonLayout>
    );
}