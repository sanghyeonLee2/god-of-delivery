import React from "react";
import { MenuDetailPrologWrap } from "./ModalComponentsLayout";
import { Font } from "../../../../assets/styles/CommonStyle";
import { ModalTitleDescriptionWrap } from "components/modal/ModalLayout";
import Image from "components/common/Image/Image";

function MenuDetailProlog({ name, description, imgUrl }) {
  return (
    <MenuDetailPrologWrap>
      <Image src={imgUrl} height={"230px"} />
      <ModalTitleDescriptionWrap>
        <Font size={"large"}>{name}</Font>
        <Font size={"small"} color={"gray"}>
          {description}
        </Font>
      </ModalTitleDescriptionWrap>
    </MenuDetailPrologWrap>
  );
}

export default MenuDetailProlog;
