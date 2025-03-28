import React, { forwardRef } from "react";
import {
  AddBtnWrap,
  MainButtonWrap,
  ModalButtonWrap,
  SubButtonWrap,
  TransButtonWrap,
} from "./MainButtonLayout";
import { Font } from "../../../../assets/styles/CommonStyle";
import MutateLoading from "components/common/Loading/MutateLoading";

export const MainBtn = forwardRef(({ text, ...rest }, ref) => {
  return (
    <MainButtonWrap {...rest} ref={ref}>
      <Font size={"small"}>{text}</Font>
    </MainButtonWrap>
  );
});

export const ModalBtn = forwardRef(({ text, isLoading, ...rest }, ref) => {
  return (
    <ModalButtonWrap {...rest} ref={ref}>
      {isLoading ? <MutateLoading /> : <Font color={"white"}>{text}</Font>}
    </ModalButtonWrap>
  );
});

export const AddBtn = forwardRef(({ text, ...rest }, ref) => {
  return (
    <AddBtnWrap {...rest} ref={ref}>
      <Font>{text}</Font>
    </AddBtnWrap>
  );
});

export function SubBtn({ type, text, onClick, height, isLoading }) {
  return (
    <SubButtonWrap type={type} onClick={onClick} $height={height} $isLoading={isLoading}>
      {isLoading ? (
        <MutateLoading />
      ) : (
        <Font size={"small"} color={"white"}>
          {text}
        </Font>
      )}
    </SubButtonWrap>
  );
}

export const TransBtn = forwardRef(({ type, text, onClick }, ref) => {
  return (
    <TransButtonWrap type={type} onClick={onClick} ref={ref}>
      <Font>{text}</Font>
    </TransButtonWrap>
  );
});
