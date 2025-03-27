import React from "react";
import { CommonPageWrap } from "../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import useCreateMenu from "../../../hooks/useCreateMenu";
import MenuForm from "pages/owner/MenuManagementPages/components/MenuForm";

function CreateMenuPage(props) {
  const { form, createMenu, isCreating } = useCreateMenu();
  return (
    <CommonPageWrap>
      <Title text="메뉴 추가하기" size="x-large" />
      <MenuForm form={form} onSubmit={createMenu} isLoading={isCreating} submitText="메뉴 추가" />
    </CommonPageWrap>
  );
}

export default CreateMenuPage;
