import React from "react";
import useCartDetail from "../../../hooks/useCartDetail";
import MenuDetail from "components/modal/MenuDetail/components/MenuDetail";

function CartDetailModal({ modalData }) {
  const { form, cartItemData, isFetching, isUpdatingCart, updateCart } = useCartDetail(modalData);
  return (
    <MenuDetail
      form={form}
      menuData={cartItemData}
      isFetching={isFetching}
      isSubmitting={isUpdatingCart}
      handleMutate={updateCart}
      btnText={"메뉴수정"}
    />
  );
}

export default CartDetailModal;
