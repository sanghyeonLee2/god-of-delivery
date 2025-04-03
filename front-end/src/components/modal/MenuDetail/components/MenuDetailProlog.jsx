import React from "react";
import { MenuDetailPrologWrap } from "./ModalComponents.styles";
import { Font } from "@assets/styles/CommonStyle";
import { ModalTitleDescriptionWrap } from "@components/modal/Modal.styles";
import Image from "@components/common/Image/Image";
import { COLORS } from "@constants/colors";

function MenuDetailProlog({ name, description, imgUrl }) {
  return (
    <MenuDetailPrologWrap>
      <Image src={imgUrl} height={"23rem"} />
      <ModalTitleDescriptionWrap>
        <Font size={"large"}>{name}</Font>
        <Font size={"small"} color={COLORS.FONT.SUB}>
          {description}
        </Font>
      </ModalTitleDescriptionWrap>
    </MenuDetailPrologWrap>
  );
}

export default MenuDetailProlog;
