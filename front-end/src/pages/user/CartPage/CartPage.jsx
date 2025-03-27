import React from "react";
import { CommonPageWrap } from "../../../assets/styles/CommonStyle";
import { useCart } from "../../../hooks/useCart";
import Loading from "components/common/Loading/Loading";
import CartHeader from "pages/user/CartPage/components/CartHeader";
import Empty from "components/common/Empty/Empty";
import CartForm from "pages/user/CartPage/components/CartForm";

function CartPage(props) {
  const { cartData, isLoading, handleDeleteCartItem, handleSubmit } = useCart();

  return (
    <CommonPageWrap>
      {isLoading && <Loading />}
      {cartData ? (
        <>
          <CartHeader
            storeName={cartData?.Store?.storeName}
            deliveryTime={cartData?.Store?.deliveryTime}
          />
          <CartForm
            handleSubmit={handleSubmit}
            handleDeleteCartItem={handleDeleteCartItem}
            cartData={cartData}
          />
        </>
      ) : (
        <Empty text={"장바구니가 비었습니다"} />
      )}
    </CommonPageWrap>
  );
}

export default CartPage;
