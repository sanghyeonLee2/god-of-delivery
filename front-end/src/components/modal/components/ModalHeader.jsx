import React from "react";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../recoil/flag/atoms";
import { ModalHeaderWrap } from "../MenuDetail/components/ModalComponentsLayout";
import { Font } from "../../../assets/styles/CommonStyle";
import { FiX } from "react-icons/fi";
import IconBtn from "components/common/Button/icon/IconBtn";

function ModalHeader({ title }) {
  const setIsModalClose = useSetRecoilState(isModalOpenState);
  return (
    <ModalHeaderWrap>
      <Font size={"large"}>{title}</Font>
      <IconBtn onClick={() => setIsModalClose({ modalType: "", flag: false, modalData: null })}>
        <FiX size={35} color={"red"} />
      </IconBtn>
    </ModalHeaderWrap>
  );
}

export default ModalHeader;
