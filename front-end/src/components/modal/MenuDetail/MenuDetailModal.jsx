import React from "react";
import MenuDetail from "components/modal/MenuDetail/components/MenuDetail";
import useMenuDetail from "../../../hooks/useMenuDetail";

function MenuDetailModal({ modalData }) {
  const { form, menuDetailData, isFetching, mutateMenuDetail, isCartPosting } =
    useMenuDetail(modalData);
  return (
    <MenuDetail
      form={form}
      menuData={menuDetailData}
      isFetching={isFetching}
      isSubmitting={isCartPosting}
      handleMutate={mutateMenuDetail}
      btnText={"메뉴 추가"}
    />
  );
}

export default MenuDetailModal;
