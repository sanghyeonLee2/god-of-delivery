import React from 'react';
import {
    CartHeader,
    CartMenuBox,
    CartWrap,
    MenuAddBtnWrap,
    MenuOptionImg,
    MenuOptionWrap,
    MethodReceiptBox,
    MinStoreInfoWrap,
    OptionBtnInner,
    OptionBtnOuter,
    PaymentBox,
    PriceWrap
} from "./CartLayout";
import {FlexOnly, Font} from "../../assets/styles/CommonStyle";
import {MainBtn, SubBtn, TransBtn} from "../../components/common/Button/main/MainButton";
import {OrderBtnWrap} from "../../components/common/Button/main/MainButtonLayout";

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
            <MenuAddBtnWrap>
                <TransBtn text={"메뉴 추가"}/>
            </MenuAddBtnWrap>
            <Font size={"large"}>수령방법을 선택해주세요</Font>
            <ul>
                <MethodReceiptBox>
                    <FlexOnly>
                        <Font>
                            배달
                        </Font>
                        &nbsp;
                        <Font size={"small"} color={"gray"}>10분~20분</Font>
                    </FlexOnly>
                    <Font>
                        2000원
                    </Font>
                </MethodReceiptBox>
                <MethodReceiptBox>
                    <FlexOnly>
                        <Font>
                            포장
                        </Font>
                        &nbsp;
                        <Font size={"small"} color={"gray"}>10분~20분</Font>
                    </FlexOnly>
                    <Font>
                        2000원
                    </Font>
                </MethodReceiptBox>
            </ul>
            <Font size={"large"}>결제금액을 확인해주세요</Font>
            <PaymentBox>
                <PriceWrap>
                    <Font>주문금액</Font>
                    <Font>10000원</Font>
                </PriceWrap>
                <PriceWrap>
                    <Font>배달팁</Font>
                    <Font>10000원</Font>
                </PriceWrap>
                <PriceWrap>
                    <Font size={"x-large"}>결제 예정 금액</Font>
                    <Font size={"x-large"}>10000원</Font>
                </PriceWrap>
            </PaymentBox>
            <OrderBtnWrap>
                <SubBtn text={"12000원 결제하기"}/>
            </OrderBtnWrap>
        </CartWrap>
    );
}

export default Cart;