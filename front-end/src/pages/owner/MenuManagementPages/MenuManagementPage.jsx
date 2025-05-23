import React from "react";
import { CommonPageWrap } from "@assets/styles/CommonStyle";
import Title from "@components/common/Title/Title";
import { useGetOwnerStoreMenus } from "./hooks/useGetOwnerStoreMenus";
import Loading from "@components/common/Loading/Loading";
import MenuInfoBox from "@pages/owner/MenuManagementPages/components/MenuInfoBox";
import Empty from "@components/common/Empty/Empty";
import { MainBtn } from "@components/common/Button/main/MainButtons";

function MenuManagementPage() {
  const { menuData, isLoading, navigateCreateMenu } = useGetOwnerStoreMenus();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <CommonPageWrap>
      <Title text={"메뉴 정보 관리"} size={"x-large"} />
      {menuData.length > 0 ? (
        <>
          <MainBtn text={"가게 메뉴추가"} onClick={navigateCreateMenu} />
          {menuData.map((menu) => (
            <MenuInfoBox menu={menu} key={menu.menuId} />
          ))}
        </>
      ) : (
        <Empty text={"메뉴가 없습니다"} />
      )}
    </CommonPageWrap>
  );
}

export default MenuManagementPage;
