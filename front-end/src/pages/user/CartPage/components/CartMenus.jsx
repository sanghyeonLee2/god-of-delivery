import React from 'react';
import * as S from "./CartMenusLayout";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../../recoil/flag/atoms";
import {FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import {MainBtn} from "components/common/Button/main/MainButton";
import {API_URLS} from "../../../../constants/urls";
import Image from "components/common/Image/Image";

function CartMenus({cartItems, handleDeleteCartItem}) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    return (
        <S.CartMenuBox>
            {cartItems?.map((cartItem) =>
                <S.MenuOptionWrap key={cartItem.cartItemId}>
                    <li>
                        <S.MenuOptionLeft>
                            <div>
                                <Font>{cartItem.content}</Font>
                                <Font size={"small"} color={"gray"}>{cartItem?.description}</Font>
                                <Font>{(cartItem.price * cartItem.quantity).toLocaleString()}원</Font>
                            </div>
                            <Image width={70} height={70} src={cartItems.imgUrl}/>
                        </S.MenuOptionLeft>
                    </li>
                    <li>
                        <FlexOnly justify="space-between">
                            <Font>{cartItem.quantity} 개</Font>
                            <FlexOnly width={"265px"} justify="space-between">
                                <MainBtn text={"옵션 / 수량 변경"}
                                         width={"125px"}
                                         type={"button"}
                                         onClick={() => setIsModalOpen({
                                             modalType: "메뉴수정",
                                             flag: true,
                                             modalData: {api: API_URLS.PUT_CART(cartItem?.cartItemId)}
                                         })}/>
                                <MainBtn text={"삭제"}
                                         width={"125px"}
                                         type={"button"}
                                         onClick={() => handleDeleteCartItem(cartItem.cartItemId)}
                                />
                            </FlexOnly>
                        </FlexOnly>
                    </li>
                </S.MenuOptionWrap>
            )}

        </S.CartMenuBox>
    );
}

export default CartMenus;