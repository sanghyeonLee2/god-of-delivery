import React from 'react';
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import {MainBtn} from "../../../components/common/Button/main/MainButton";
import {CartMenuBox, MenuOptionImg, MenuOptionLeft, MenuOptionWrap} from "./CartMenusLayout";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import {useDelete} from "../../../hooks/useDelete";

function CartMenus({menus, getValues}) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    const {mutate: deleteCartData} = useDelete("cart-delete")
    return (
        <CartMenuBox>
            {menus?.map((menu, idx) =>
                <MenuOptionWrap key={menu.menuId}>
                    <li>
                        <MenuOptionLeft>
                            <div>
                                <Font>{menu.menuName}</Font>
                                <Font size={"small"} color={"gray"}>치킨무 주세요 치킨 양념 주세요</Font>
                                <Font>{(menu.price * getValues(`menus[${idx}].quantity`)).toLocaleString()}원</Font>
                            </div>
                            <MenuOptionImg/>
                        </MenuOptionLeft>
                    </li>
                    <li>
                        <FlexOnly justify="space-between">
                            <Font>{getValues(`menus[${idx}].quantity`)} 개</Font>
                            <FlexOnly width={"265px"} justify="space-between">
                                <MainBtn text={"옵션 / 수량 변경"}
                                         width={"125px"}
                                         type={"button"}
                                         onClick={() => setIsModalOpen({
                                             modalType: "메뉴수정",
                                             modalFlag: true,
                                             modalIdData: menu.menuId
                                         })}/>
                                <MainBtn text={"삭제"}
                                         width={"125px"}
                                         type={"button"}
                                         onClick={() => deleteCartData(menu.menuId)}
                                />
                            </FlexOnly>
                            {/*헤더에 토큰 있으면 장바구니에서 옵션 변경, 아니면 음식점 탭에서 옵션 변경*/}
                        </FlexOnly>
                    </li>
                </MenuOptionWrap>
            )}

        </CartMenuBox>
    );
}

export default CartMenus;