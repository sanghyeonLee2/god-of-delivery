import React, {forwardRef} from 'react';
import {MainButtonLayout, SubButtonLayout, TransButtonLayout} from "./MainButtonLayout";
import {Font} from "../../../../assets/styles/CommonStyle";

export function MainBtn({type, text, onClick}) {
    return (
        <MainButtonLayout type={type} onClick={onClick}>
            <Font>{text}</Font>
        </MainButtonLayout>
    );
}

export function SubBtn({type, text, onClick}) {
    return (
        <SubButtonLayout type={type} onClick={onClick}>
            <Font color={"white"}>{text}</Font>
        </SubButtonLayout>
    );
}

export const TransBtn = forwardRef(({dataAction, type, text, onClick}, ref) => {
    return (
        <TransButtonLayout type={type} onClick={onClick} ref={ref} data-action={dataAction}>
            <Font>{text}</Font>
        </TransButtonLayout>
    );
});