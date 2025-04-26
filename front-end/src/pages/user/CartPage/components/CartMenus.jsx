import React from "react";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import { MainBtn } from "@components/common/Button/main/MainButtons";
import Image from "@components/common/Image/Image";
import { CartMenusWrap } from "@pages/user/CartPage/Cart.styles";
import { COLORS } from "@constants/style";
import useOpenModal from "@hooks/useOpenModal";
import { MODAL_TYPES } from "@constants/modalTypes";
import CancelIconBtn from "@components/common/Button/icon/CancelIconBtn";

function CartMenus({ cartItems, cartMenuTotalPrice, handleDeleteCartItem }) {
  const openModal = useOpenModal();
  return (
    <CartMenusWrap>
      {cartItems?.map((cartItem) => (
        <div key={cartItem.cartItemId}>
          <FlexOnly justify={"space-between"} style={{ alignItems: "flex-start" }}>
            <div>
              <Font size={"large"}>{cartItem.name}</Font>
              <Font size={"small"} color={COLORS.FONT.SUB}>
                {cartItem.description}
              </Font>
              <Font>{cartMenuTotalPrice.toLocaleString()}원</Font>
            </div>
            <Image width={"8rem"} height={"8rem"} src={cartItem.imgUrl} />
          </FlexOnly>
          <FlexOnly justify="space-between">
            <Font>{cartItem.quantity} 개</Font>
            <MainBtn
              text={"옵션 / 수량 변경"}
              width={"11rem"}
              type={"button"}
              onClick={() =>
                openModal(MODAL_TYPES.UPDATE_MENU, {
                  menuId: cartItem.menuId,
                  quantity: cartItem.quantity,
                })
              }
            />
          </FlexOnly>
          <CancelIconBtn
            top={"0"}
            right={"0"}
            type={"button"}
            onClick={() => handleDeleteCartItem(cartItem.cartItemId)}
          />
        </div>
      ))}
    </CartMenusWrap>
  );
}

export default CartMenus;
