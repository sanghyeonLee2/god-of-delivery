import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FlexOnly, Font } from "../../../../../assets/styles/CommonStyle";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../../../recoil/flag/atoms";
import IconBtn from "components/common/Button/icon/IconBtn";

function HeaderLocationBtn({ text }) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  return (
    <IconBtn
      onClick={() => {
        setIsModalOpen({ modalType: "주소설정", flag: true, modalData: null });
      }}
    >
      <FlexOnly>
        <IoLocationOutline size={26} />
        <Font>{text}</Font>
      </FlexOnly>
    </IconBtn>
  );
}

export default HeaderLocationBtn;
