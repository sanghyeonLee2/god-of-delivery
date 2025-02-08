import React from 'react';
import {
    LeftMenuInfo,
    MenuBoxWrap,
    MenuDescriptionWrap,
    MenuInfoInner,
    MenuPicture,
    MenuPriceWrap,
    MenuReviewWrap,
    MenuTitleWrap
} from "./MenuBoxLayout";
import {DividingLine, Font, VerticalSpace} from "../../../assets/styles/CommonStyle";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";

function MenuBox({menuInfoItem}) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    return (
        <MenuBoxWrap>
            <Font size={"x-large"}>
                {menuInfoItem.menuTitle}
            </Font>
            {menuInfoItem.menus?.map((menu) =>
                <div key={menu.menuId} onClick={() => {
                    setIsModalOpen({
                        modalType: "메뉴상세",
                        modalFlag: true,
                        modalIdData: menu?.menuId
                    })
                }}>
                    <MenuInfoInner>
                        <LeftMenuInfo>
                            <ul>
                                <MenuTitleWrap>
                                    <Font size={"large"}>
                                        {menu.menuName}
                                    </Font>
                                </MenuTitleWrap>
                                <MenuDescriptionWrap>
                                    <Font color={"gray"}>
                                        {menu?.description}
                                    </Font>
                                </MenuDescriptionWrap>
                                <MenuPriceWrap>
                                    <Font>
                                        {menu.price.toLocaleString()}원
                                    </Font>
                                </MenuPriceWrap>
                                <MenuReviewWrap>
                                    <Font size="small" color={"gray"}>
                                        리뷰{menu.menuReviewCnt}
                                    </Font>
                                </MenuReviewWrap>
                            </ul>
                        </LeftMenuInfo>
                        <MenuPicture/>
                    </MenuInfoInner>
                    <DividingLine/>
                </div>
            )}
            <VerticalSpace/>
        </MenuBoxWrap>
    );
}

export default MenuBox;