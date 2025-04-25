import React from "react";
import { CommonBorder } from "@assets/styles/CommonStyle";
import CartMenus from "@pages/user/CartPage/components/CartMenus";
import { AddBtn, SubBtn } from "@components/common/Button/main/MainButtons";
import CartPayment from "@pages/user/CartPage/components/CartPayment";
import { OrderBtnWrap } from "@components/common/Button/main/MainButtons.styles";
import { useNavigate } from "react-router-dom";

function CartForm({ handleSubmit, handleDeleteCartItem, cartData }) {
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit}>
      <CommonBorder $hasAddBtn={true}>
        <CartMenus
          handleDeleteCartItem={handleDeleteCartItem}
          cartMenuTotalPrice={cartData?.cartMenuTotalPrice}
          cartItems={cartData?.CartItems}
        />
        <AddBtn text={"메뉴 추가"} onClick={() => navigate(`/stores/all/${cartData?.storeId}`)} />
      </CommonBorder>
      <CartPayment
        tips={cartData?.Store?.deliveryTip}
        cartMenuTotalPrice={cartData?.cartMenuTotalPrice}
      />
      <OrderBtnWrap>
        <SubBtn type={"submit"} text={"주문하기"} />
      </OrderBtnWrap>
    </form>
  );
}

export default CartForm;
