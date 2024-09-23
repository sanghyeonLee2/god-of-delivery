import React from 'react';
import {MainButtonLayout} from "./MainButtonLayout";

export function MainButton({type, text, onClick}) {
    return (
        <MainButtonLayout type={type} onClick={onClick}>
            <span className={"common-text"}> {text}</span>
        </MainButtonLayout>
    );
}