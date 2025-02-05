import React from 'react';
import {CommonSectionWrap, DividingLine, Font} from "../../../assets/styles/CommonStyle";

function MenuDetail({menus}) {
    return (
        <div>
            {menus.map((menu) => {
                    const totalMenuPrice = menu.menuPrice + menu.menuOptions.reduce((optionAcc, option) => optionAcc + option.optionPrice, 0);
                    return (<div key={menu.menuId}>
                        <CommonSectionWrap>
                            <Font>
                                {menu?.menuName}
                            </Font>
                            <Font size={"small"} color={"gray"}>
                                기본 : {menu?.menuPrice.toLocaleString()}원
                            </Font>
                            {menu?.menuOptions.map((option) =>
                                <div key={option.optionId}>
                                    <Font size={"small"} color={"gray"}>
                                        {option.optionName} : {option.optionPrice.toLocaleString()}원
                                    </Font>
                                </div>
                            )}
                            <Font>
                                {totalMenuPrice.toLocaleString()}원
                            </Font>
                        </CommonSectionWrap>
                        <DividingLine/>
                    </div>)
                }
            )}
        </div>
    );
}

export default MenuDetail;