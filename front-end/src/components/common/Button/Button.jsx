import React from 'react';
import {ButtonLayout} from "./ButtonLayout";

export function Button({type, text}) {
    return (
        <ButtonLayout type={type}>
            <span> {text}</span>
        </ButtonLayout>
    );
}