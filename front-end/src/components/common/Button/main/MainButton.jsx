import React, {forwardRef} from 'react';
import {MainButtonWrap, ModalButtonWrap, SubButtonWrap, TransButtonWrap} from "./MainButtonLayout";
import {Font} from "../../../../assets/styles/CommonStyle";
import MutateLoading from "components/common/Loading/MutateLoading";


export const MainBtn = forwardRef(({type, text, onClick, width}, ref) => {
    return (
        <MainButtonWrap $width={width} type={type} onClick={onClick} ref={ref}>
            <Font size={"small"}>{text}</Font>
        </MainButtonWrap>
    );
});

export const ModalBtn = forwardRef(({type, text, onClick, width, height, isLoading}, ref) => {
    return (
        <ModalButtonWrap width={width} height={height} type={type} onClick={onClick} ref={ref}>
            {isLoading ? <MutateLoading/> : <Font color={"white"}>{text}</Font>}
        </ModalButtonWrap>
    );
});


export function SubBtn({type, text, onClick, height, isLoading}) {
    return (
        <SubButtonWrap type={type} onClick={onClick} $height={height} $isLoading={isLoading}>
            {isLoading ? <MutateLoading/> : <Font color={"white"}>{text}</Font>}
        </SubButtonWrap>
    );
}

export const TransBtn = forwardRef(({type, text, onClick}, ref) => {
    return (
        <TransButtonWrap type={type} onClick={onClick} ref={ref}>
            <Font>{text}</Font>
        </TransButtonWrap>
    );
});