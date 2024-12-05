import React from 'react';
import {Font} from "../../../assets/styles/CommonStyle";
import {MainBtn} from "../../../components/common/Button/main/MainButton";
import {CartMenuBox, MenuOptionImg, MenuOptionWrap, OptionBtnInner, OptionBtnOuter} from "./CartMenusLayout";

function CartMenus(props) {
    return (
        <CartMenuBox>
            <MenuOptionWrap>
                <ul>
                    <li>
                        <Font>후라이드 치킨</Font>
                    </li>

                    <li>
                        <Font size={"small"} color={"gray"}>치킨무 주세요 치킨 양념 주세요</Font>
                    </li>
                    <li>
                        <Font>3000원</Font>
                    </li>
                </ul>
                <MenuOptionImg/>
            </MenuOptionWrap>
            <OptionBtnOuter>
                <OptionBtnInner>
                    <MainBtn text={"삭제/수량 변경"}/>
                    <MainBtn text={"옵션 변경"}/>
                </OptionBtnInner>
            </OptionBtnOuter>
        </CartMenuBox>
    );
}

export default CartMenus;