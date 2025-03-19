import React from 'react';
import {CommonPageWrap} from "../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import {useMenuManagement} from "../../../hooks/useMenuManagement";
import Loading from "components/common/Loading/Loading";
import MenuInfoBox from "pages/owner/MenuManagementPage/components/MenuInfoBox";

function MenuManagementPage(props) {
    const {
        menuData,
        createMenus,
        isLoading,
    } = useMenuManagement()
    if (isLoading) {
        return <Loading/>;
    }
    //db 구조를 보고 만들어야할 거 같다.
    return (
        <CommonPageWrap>
            <Title text={"메뉴 정보 관리"} size={"x-large"}/>
            {menuData.map((menu) =>
                <MenuInfoBox menu={menu} key={menu.menuId}/>
            )}

        </CommonPageWrap>
    );
}

export default MenuManagementPage;