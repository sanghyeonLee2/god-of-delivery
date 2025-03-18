import React from 'react';
import {CommonSectionWrap, DividingLine, Font} from "../../../assets/styles/CommonStyle";

function OrderMenusDetail({menus}) {
    return (
        <div>
            {menus?.map((menu) => {
                    const totalMenuPrice = menu.menuPriceSnapshot + menu.orderItemOptions.reduce((optionAcc, option) => optionAcc + option.optionPriceSnapshot, 0);
                    return (<div key={menu.orderItemId}>
                        <CommonSectionWrap>
                            <Font>
                                {menu?.menuNameSnapshot}
                            </Font>
                            <Font size={"small"} color={"gray"}>
                                기본 : {menu?.menuPriceSnapshot.toLocaleString()}원
                            </Font>
                            {menu?.orderItemOptions.map((option) =>
                                <div key={option.menuOptionId}>
                                    <Font size={"small"} color={"gray"}>
                                        {option.optionNameSnapshot} : {option.optionPriceSnapshot.toLocaleString()}원
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

export default OrderMenusDetail;