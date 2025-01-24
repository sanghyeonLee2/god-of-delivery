import React from 'react';
import {Font} from "../../../assets/styles/CommonStyle";
import {MainBtn, TransBtn} from "../../../components/common/Button/main/MainButton";
import {
    CartMenuBox,
    ChgQuantityWrap,
    MenuOptionImg,
    MenuOptionLeft,
    MenuOptionWrap,
    OptionBtnInner,
    OptionBtnOuter
} from "./CartMenusLayout";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import {quantityOnChg} from "../../../utils/clickHandler";

function CartMenus({menus, form}) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    return (
        <CartMenuBox>
            {menus?.map((menu, idx) =>
                <MenuOptionWrap key={menu.menuName}>
                    <li>
                        <MenuOptionLeft>
                            <div>
                                <Font>{menu.menuName}</Font>
                                <Font size={"small"} color={"gray"}>치킨무 주세요 치킨 양념 주세요</Font>
                                <Font>{(menu.price * form.getValues(`menus[${idx}].quantity`)).toLocaleString()}원</Font>
                            </div>
                            <MenuOptionImg/>
                        </MenuOptionLeft>
                    </li>
                    <li>
                        <OptionBtnOuter>
                            <OptionBtnInner>
                                <ChgQuantityWrap text={"삭제/수량 변경"}>
                                    <TransBtn text={"-"}
                                              onClick={() => quantityOnChg(-1, form, `menus[${idx}].quantity`)}/>
                                    <div>{form.watch(`menus[${idx}].quantity`)}</div>
                                    <TransBtn text={"+"}
                                              onClick={() => quantityOnChg(+1, form, `menus[${idx}].quantity`)}/>
                                </ChgQuantityWrap>
                                <MainBtn text={"옵션 변경"}
                                         onClick={() => setIsModalOpen({
                                             modalType: "updateCartMenu",
                                             modalFlag: true,
                                             modalIdData: menu.menuId
                                         })}/>
                                {/*헤더에 토큰 있으면 장바구니에서 옵션 변경, 아니면 음식점 탭에서 옵션 변경*/}
                            </OptionBtnInner>
                        </OptionBtnOuter>
                    </li>
                </MenuOptionWrap>
            )}

        </CartMenuBox>
    );
}

export default CartMenus;