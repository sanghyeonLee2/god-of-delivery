import React, { forwardRef } from "react";
import * as S from "./MainButtons.styles";
import { Font } from "@assets/styles/CommonStyle";
import MutateLoading from "@components/common/Loading/MutateLoading";

export const MainBtn = forwardRef(({ text, width, ...rest }, ref) => {
  return (
    <S.MainButtonWrap {...rest} $width={width} ref={ref}>
      <Font size={"small"}>{text}</Font>
    </S.MainButtonWrap>
  );
});

export const ModalBtn = forwardRef(({ text, isUpdate, isLoading, ...rest }, ref) => {
  return (
    <S.ModalButtonWrap $isUpdate={isUpdate} {...rest} ref={ref}>
      {isLoading ? <MutateLoading /> : <Font color={"white"}>{text}</Font>}
    </S.ModalButtonWrap>
  );
});

export const AddBtn = forwardRef(({ text, ...rest }, ref) => {
  return (
    <S.AddBtnWrap {...rest} ref={ref}>
      <Font>{text}</Font>
    </S.AddBtnWrap>
  );
});

export function SubBtn({ type, text, onClick, height, isLoading }) {
  return (
    <S.SubButtonWrap type={type} onClick={onClick} $height={height} $isLoading={isLoading}>
      {isLoading ? (
        <MutateLoading />
      ) : (
        <Font size={"small"} color={"white"}>
          {text}
        </Font>
      )}
    </S.SubButtonWrap>
  );
}

export const TransBtn = forwardRef(({ type, text, onClick }, ref) => {
  return (
    <S.TransButtonWrap type={type} onClick={onClick} ref={ref}>
      <Font size={"small"}>{text}</Font>
    </S.TransButtonWrap>
  );
});
