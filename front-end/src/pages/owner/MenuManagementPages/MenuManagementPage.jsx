import React from "react";
import { CommonPageWrap } from "../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import { useMenuManagement } from "../../../hooks/useMenuManagement";
import Loading from "components/common/Loading/Loading";
import MenuInfoBox from "pages/owner/MenuManagementPages/components/MenuInfoBox";

function MenuManagementPage(props) {
  const { menuData, isLoading } = useMenuManagement();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <CommonPageWrap>
      <Title text={"메뉴 정보 관리"} size={"x-large"} />
      {menuData.map((menu) => (
        <MenuInfoBox menu={menu} key={menu.menuId} />
      ))}
    </CommonPageWrap>
  );
}

export default MenuManagementPage;
