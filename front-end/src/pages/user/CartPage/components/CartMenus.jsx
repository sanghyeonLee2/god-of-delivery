import React from "react";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "@recoil/flag/atoms";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import { MainBtn } from "@components/common/Button/main/MainButtons";
import Image from "@components/common/Image/Image";
import { CartMenusWrap } from "@pages/user/CartPage/Cart.styles";
import { COLORS } from "@constants/colors";

function CartMenus({ cartItems, cartMenuTotalPrice, handleDeleteCartItem }) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  return (
    <CartMenusWrap>
      {cartItems?.map((cartItem) => (
        <div key={cartItem.cartItemId}>
          <FlexOnly justify={"space-between"} style={{ alignItems: "flex-start" }}>
            <div>
              <Font size={"large"}>{cartItem.name}</Font>
              <Font size={"small"} color={COLORS.FONT.SUB}>
                {cartItem?.description}
              </Font>
              <Font>{cartMenuTotalPrice.toLocaleString()}원</Font>
            </div>
            <Image width={"8rem"} height={"8rem"} src={cartItems.imgUrl} />
          </FlexOnly>
          <FlexOnly justify="space-between">
            <Font>{cartItem.quantity} 개</Font>
            <FlexOnly width={"230px"} justify="space-between">
              <MainBtn
                text={"옵션 / 수량 변경"}
                width={"11rem"}
                type={"button"}
                onClick={() =>
                  setIsModalOpen({
                    modalType: "메뉴수정",
                    flag: true,
                    modalData: {
                      menuId: cartItem.menuId,
                      quantity: cartItem.quantity,
                    },
                  })
                }
              />
              <MainBtn
                text={"삭제"}
                width={"11rem"}
                type={"button"}
                onClick={() => handleDeleteCartItem(cartItem.cartItemId)}
              />
            </FlexOnly>
          </FlexOnly>
        </div>
      ))}
    </CartMenusWrap>
  );
}

export default CartMenus;
