import React from 'react';
import {CommonBorder} from "../../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import MenuOptionBox from "pages/owner/MenuManagementPage/components/MenuOptionBox";

function MenuOptions({menuOptions, menuId}) {
    return (
        <CommonBorder>
            <Title text={"메뉴 옵션 수정"}/>
            {menuOptions.map((option) =>
                <MenuOptionBox option={option} menuId={menuId} key={option.menuOptionId}/>
            )}
        </CommonBorder>
    );
}

export default MenuOptions;