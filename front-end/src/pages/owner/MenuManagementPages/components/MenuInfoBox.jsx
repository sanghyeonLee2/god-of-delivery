import React from "react";
import {
  ColumnFlex,
  CommonBorder,
  CommonPageHeader,
  FlexOnly,
  Font,
} from "@assets/styles/CommonStyle";
import { MainBtn, SubBtn } from "@components/common/Button/main/MainButtons";
import Image from "@components/common/Image/Image";
import { useNavigate } from "react-router-dom";
import { useDeleteMenu } from "@pages/owner/MenuManagementPages/hooks/useDeleteMenu";
import Loading from "@components/common/Loading/Loading";

function MenuInfoBox({ menu }) {
  const deleteMenu = useDeleteMenu();
  const navigate = useNavigate();
  if (deleteMenu.isLoading) {
    return <Loading />;
  }
  return (
    <CommonBorder key={menu.menuId}>
      <FlexOnly justify={"center"}>
        <Image src={menu.imgUrl} width={"18rem"} height={"18rem"} />
      </FlexOnly>
      <CommonPageHeader>
        <Font>카테고리</Font>
        <Font>{menu.category}</Font>
      </CommonPageHeader>
      <CommonPageHeader>
        <Font>메뉴 이름</Font>
        <Font>{menu.name}</Font>
      </CommonPageHeader>
      <CommonPageHeader>
        <Font>메뉴 금액</Font>
        <Font>{menu.price.toLocaleString()}원</Font>
      </CommonPageHeader>
      <CommonPageHeader>
        <Font>메뉴 설명</Font>
        <Font>{menu.description}</Font>
      </CommonPageHeader>
      <ColumnFlex $height={"9.5rem"}>
        <SubBtn
          text={"메뉴정보 조회 / 수정"}
          type={"button"}
          onClick={() => navigate(`${menu.menuId}/update`)}
        />
        <MainBtn
          text={"메뉴 삭제"}
          type={"button"}
          onClick={() => deleteMenu.mutate(menu.menuId)}
        />
      </ColumnFlex>
    </CommonBorder>
  );
}

export default MenuInfoBox;
