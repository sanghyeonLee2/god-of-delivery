import React from "react";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "@recoil/flag/atoms";
import { ModalHeaderWrap } from "../MenuDetail/components/ModalComponents.styles";
import { Font } from "@assets/styles/CommonStyle";
import CancelIconBtn from "@components/common/Button/icon/CancelIconBtn";

function ModalHeader({ title }) {
  const setIsModalClose = useSetRecoilState(isModalOpenState);
  return (
    <ModalHeaderWrap>
      <Font size={"large"}>{title}</Font>
      <CancelIconBtn
        onClick={() => setIsModalClose({ modalType: "", flag: false, modalData: null })}
      />
    </ModalHeaderWrap>
  );
}

export default ModalHeader;
