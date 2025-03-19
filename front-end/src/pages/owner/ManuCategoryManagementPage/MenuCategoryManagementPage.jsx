import React from 'react';
import {CommonPageWrap} from "../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import Loading from "components/common/Loading/Loading";
import MenuCategoryBox from "pages/owner/MenuManagementPage/components/MenuCategoryBox";
import {useGetMenuCategory} from "../../../hooks/useGetMenuCategory";

function MenuCategoryManagementPage() {
    const {
        isLoading,
        menuCategoryData,
    } = useGetMenuCategory()
    if (isLoading) {
        return <Loading/>
    }
    return (
        <CommonPageWrap>
            <Title text={"메뉴 카테고리 정보 관리"} size={"x-large"}/>
            {menuCategoryData.map(menuCategory =>
                <MenuCategoryBox menuCategory={menuCategory} key={menuCategory.menuCategoryId}/>
            )}
        </CommonPageWrap>
    );
}

export default MenuCategoryManagementPage;