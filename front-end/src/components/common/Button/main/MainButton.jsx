import React from 'react';
import {MainButtonLayout, SubButtonLayout, TransButtonLayout} from "./MainButtonLayout";
import {MiddleSizeFont} from "../../../../assets/styles/CommonStyle";

export function MainBtn({type, text, onClick}) {
    return (
        <MainButtonLayout type={type} onClick={onClick}>
            <MiddleSizeFont> {text}</MiddleSizeFont>
        </MainButtonLayout>
    );
}

export function SubBtn({type, text, onClick}) {
    return (
        <SubButtonLayout type={type} onClick={onClick}>
            <MiddleSizeFont color={"white"}> {text}</MiddleSizeFont>
        </SubButtonLayout>
    );
}

export function TransBtn({type, text, onClick}) {
    return (
        <TransButtonLayout type={type} onClick={onClick}>
            <MiddleSizeFont> {text}</MiddleSizeFont>
        </TransButtonLayout>
    );
}