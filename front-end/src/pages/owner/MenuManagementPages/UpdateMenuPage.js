import React from "react";
import { CommonPageWrap } from "@assets/styles/CommonStyle";
import Title from "@components/common/Title/Title";
import MenuForm from "@pages/owner/MenuManagementPages/components/MenuForm";
import useUpdateMenu from "./hooks/useUpdateMenu";
import Loading from "@components/common/Loading/Loading";

function UpdateMenuPage() {
  const { updateMenu, isFetching, isUpdating, form } = useUpdateMenu();
  if (isFetching) {
    return <Loading />;
  }
  return (
    <CommonPageWrap>
      <Title text="메뉴 수정하기" size="x-large" />
      <MenuForm form={form} onSubmit={updateMenu} isLoading={isUpdating} submitText="메뉴 수정" />
    </CommonPageWrap>
  );
}

export default UpdateMenuPage;
