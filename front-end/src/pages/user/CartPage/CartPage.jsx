import React from "react";
import * as S from "./CartLayout";
import { CommonBorder, CommonPageWrap, Font } from "../../../assets/styles/CommonStyle";
import { AddBtn, SubBtn } from "components/common/Button/main/MainButton";
import { OrderBtnWrap } from "components/common/Button/main/MainButtonLayout";
import { useCart } from "../../../hooks/useCart";
import Loading from "components/common/Loading/Loading";
import { useNavigate } from "react-router-dom";
import CartPayment from "./components/CartPayment";
import CartMenus from "pages/user/CartPage/components/CartMenus";

function CartPage(props) {
  const { cartData, isLoading, handleDeleteCartItem, handleSubmit } = useCart();
  const navigate = useNavigate();
  return (
    <CommonPageWrap style={{ minHeight: "calc(100vh - 200px)" }}>
      {/* ✅ CLS 방지 */}
      {isLoading && <Loading />}
      <S.CartHeader>
        <S.MinStoreInfoWrap>
          <Font size={"x-large"}>{cartData?.Store?.storeName}</Font>
          <Font size={"small"} color={"gray"}>
            {cartData?.Store?.deliveryTime} 후 도착예정
          </Font>
        </S.MinStoreInfoWrap>
      </S.CartHeader>
      <form onSubmit={handleSubmit}>
        <CommonBorder $hasAddBtn={true}>
          <CartMenus
            handleDeleteCartItem={handleDeleteCartItem}
            orderPrice={cartData?.totalCartMenuPrice}
            cartItems={cartData?.CartItems}
          />
          <AddBtn
            text={"메뉴 추가"}
            onClick={() => navigate(`/stores/info/${cartData?.storeId}`)}
          />
        </CommonBorder>
        <CartPayment tips={cartData?.Store.deliveryTip} orderPrice={cartData?.totalCartMenuPrice} />
        <OrderBtnWrap>
          <SubBtn type={"submit"} text={"결제하기"} />
        </OrderBtnWrap>
      </form>
    </CommonPageWrap>
  );
}

export default CartPage;
