import React, {forwardRef} from 'react';
import {MainButtonLayout, SubButtonLayout, TransButtonLayout} from "./MainButtonLayout";
import {Font} from "../../../../assets/styles/CommonStyle";


export const MainBtn = forwardRef(({type, text, onClick, width, height}, ref) => {
    return (
        <MainButtonLayout width={width} height={height} type={type} onClick={onClick} ref={ref}>
            <Font>{text}</Font>
        </MainButtonLayout>
    );
});

export function SubBtn({type, text, onClick}) {
    return (
        <SubButtonLayout type={type} onClick={onClick}>
            <Font color={"white"}>{text}</Font>
        </SubButtonLayout>
    );
}

export const TransBtn = forwardRef(({type, text, onClick}, ref) => {
    return (
        <TransButtonLayout type={type} onClick={onClick} ref={ref}>
            <Font>{text}</Font>
        </TransButtonLayout>
    );
});