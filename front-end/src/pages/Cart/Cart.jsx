import React from 'react';
import {CartHeader, CartWrap, MenuAddBtnWrap, MinStoreInfoWrap} from "./CartLayout";
import {Font} from "../../assets/styles/CommonStyle";
import {SubBtn, TransBtn} from "../../components/common/Button/main/MainButton";
import {OrderBtnWrap} from "../../components/common/Button/main/MainButtonLayout";
import CartPayment from "./components/CartPayment";
import CartReceiptMethod from "./components/CartReceiptMethod";
import CartMenus from "./components/CartMenus";

function Cart(props) {
    return (
        <CartWrap>
            <CartHeader>
                <MinStoreInfoWrap>
                    <Font size={"x-large"}>네네치킨</Font>
                    <Font size={"small"} color={"gray"}>15~20분 후 도착</Font>
                    {/*쿠폰 컴포넌트 추가*/}
                </MinStoreInfoWrap>
            </CartHeader>
            <CartMenus/>
            <MenuAddBtnWrap>
                <TransBtn text={"메뉴 추가"}/>
            </MenuAddBtnWrap>
            <CartReceiptMethod/>
            <CartPayment/>
            <OrderBtnWrap>
                <SubBtn text={"12000원 결제하기"}/>
            </OrderBtnWrap>
        </CartWrap>
    );
}

export default Cart;