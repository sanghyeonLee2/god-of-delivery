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
import {MiddleSizeFont, SmallSizeFont} from "../../assets/styles/CommonStyle";
import {MainBtn, SubBtn, TransBtn} from "../../components/common/Button/main/MainButton";
import {OrderBtnWrap} from "../../components/common/Button/main/MainButtonLayout";
import TitleText from "../../components/common/TitleText/TitleText";

function Cart(props) {
    return (
        <CartWrap>
            <CartHeader>
                <MinStoreInfoWrap>
                    <TitleText text={"네네치킨"}/>
                    <SmallSizeFont color={"gray"}>15~20분 후 도착</SmallSizeFont>
                    {/*쿠폰 컴포넌트 추가*/}
                </MinStoreInfoWrap>
            </CartHeader>
            <CartMenuBox>
                <MenuOptionWrap>
                    <ul>
                        <li>
                            <MiddleSizeFont>후라이드 치킨</MiddleSizeFont>
                        </li>

                        <li>
                            <SmallSizeFont color={"gray"}>치킨무 주세요 치킨 양념 주세요</SmallSizeFont>
                        </li>
                        <li>
                            <MiddleSizeFont>3000원</MiddleSizeFont>
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
            <TitleText text={"수령방법을 선택해주세요"}/>
            <ul>
                <MethodReceiptBox>
                    <div>
                        <MiddleSizeFont>
                            배달
                        </MiddleSizeFont>
                        &nbsp;
                        <SmallSizeFont color={"gray"}>10분~20분</SmallSizeFont>
                    </div>
                    <MiddleSizeFont>
                        2000원
                    </MiddleSizeFont>
                </MethodReceiptBox>
                <MethodReceiptBox>
                    <div>
                        <MiddleSizeFont>
                            포장
                        </MiddleSizeFont>
                        &nbsp;
                        <SmallSizeFont color={"gray"}>10분~20분</SmallSizeFont>
                    </div>
                    <MiddleSizeFont>
                        2000원
                    </MiddleSizeFont>
                </MethodReceiptBox>
            </ul>
            <TitleText text={"결제금액을 확인해주세요"}/>
            <PaymentBox>
                <PriceWrap>
                    <MiddleSizeFont>주문금액</MiddleSizeFont>
                    <MiddleSizeFont>10000원</MiddleSizeFont>
                </PriceWrap>
                <PriceWrap>
                    <MiddleSizeFont>배달팁</MiddleSizeFont>
                    <MiddleSizeFont>10000원</MiddleSizeFont>
                </PriceWrap>
                <PriceWrap>
                    <TitleText text={"결제 예정 금액"}/>
                    <TitleText text={"10000원"}/>
                </PriceWrap>
            </PaymentBox>
            <OrderBtnWrap>
                <SubBtn text={"12000원 결제하기"}/>
            </OrderBtnWrap>
        </CartWrap>
    );
}

export default Cart;