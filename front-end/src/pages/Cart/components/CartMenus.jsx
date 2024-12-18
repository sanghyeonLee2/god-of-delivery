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

function CartMenus({menus, form, register,}) {
    const setModalData = () => {
    }
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
                                    <TransBtn text={"-"} onClick={() => {
                                        form.setValue(`menus[${idx}].quantity`, form.getValues(`menus[${idx}].quantity`) - 1)
                                    }}/>
                                    <div {...register}>{form.watch(`menus[${idx}].quantity`)}</div>
                                    <TransBtn text={"+"}
                                              onClick={() => {
                                                  form.setValue(`menus[${idx}].quantity`, form.getValues(`menus[${idx}].quantity`) + 1)
                                              }}/>
                                </ChgQuantityWrap>
                                <MainBtn text={"옵션 변경"}
                                         onClick={() => setIsModalOpen({
                                             modalType: "updateCartMenu",
                                             modalFlag: true
                                         })}/>
                            </OptionBtnInner>
                        </OptionBtnOuter>
                    </li>
                </MenuOptionWrap>
            )}

        </CartMenuBox>
    );
}

export default CartMenus;