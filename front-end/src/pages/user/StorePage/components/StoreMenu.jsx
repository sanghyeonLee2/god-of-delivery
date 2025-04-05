import React from "react";
import * as S from "./StoreMenu.styles";
import { Font, VerticalSpace } from "@assets/styles/CommonStyle";
import Title from "@components/common/Title/Title";
import { TabWrap } from "../StorePage.styles";
import Image from "@components/common/Image/Image";
import { COLORS } from "@constants/style";
import useOpenModal from "@hooks/useOpenModal";
import { MODAL_TYPES } from "@constants/modalTypes";

function StoreMenu({ notice, menuInfo }) {
  const openModal = useOpenModal();
  return (
    <TabWrap>
      <S.InfoBox>
        <Font>{notice}</Font>
      </S.InfoBox>
      <ul>
        {menuInfo?.map((menuInfoItem) => (
          <li key={menuInfoItem.title}>
            <Title size={"x-large"} text={menuInfoItem.title} />
            {menuInfoItem.menus?.map((menu) => (
              <div
                key={menu.menuId}
                onClick={() => openModal(MODAL_TYPES.MENU_DETAIL, { menuId: menu?.menuId })}
              >
                <S.MenuInfoInner>
                  <div>
                    <Font size={"large"}>{menu?.name}</Font>
                    <Font color={COLORS.FONT.SUB}>{menu?.description}</Font>
                    <Font>{menu?.price.toLocaleString()}원</Font>
                  </div>
                  <Image src={menu?.imgUrl} width={"14rem"} height={"14rem"} />
                </S.MenuInfoInner>
              </div>
            ))}
            <VerticalSpace />
          </li>
        ))}
      </ul>
    </TabWrap>
  );
}

export default StoreMenu;
