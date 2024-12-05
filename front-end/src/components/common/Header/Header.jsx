import React from 'react';
import {
    CartWrap,
    HeaderMainText,
    HeaderTextWrap,
    HeaderWrap,
    SearchBoxInner,
    SearchBoxOuter,
    SearchBoxTextOuter
} from "./HeaderLayout";
import {MainBtn} from "../Button/main/MainButton";
import {Link, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {isSignInState} from "../../../recoil/user/atoms";
import cart from "../../../assets/img/cart.png"
import {Font} from "../../../assets/styles/CommonStyle";
import SearchForm from "../../forms/SearchForm/SearchForm";

export function Header({currentAddress}) {
    const navigate = useNavigate()
    const [isSignIn, setIsSignIn] = useRecoilState(isSignInState)
    return (
        <>
            <HeaderWrap>
                <Link to={"/"}>
                    <h1>배달의 신</h1>
                </Link>
                <Link to={"/select-address"}>
                    <p>{currentAddress}</p>
                </Link>
                {isSignIn ? <MainBtn type={"button"} text={"로그아웃"} onClick={
                        () => {
                            localStorage.removeItem("access-token")
                            localStorage.removeItem("refresh-token")
                            setIsSignIn(false)
                        }
                    }/> :
                    <MainBtn type={"button"} text={"회원가입/로그인"} onClick={() => navigate("sign-up")}/>}
            </HeaderWrap>
            <CartWrap onClick={() => navigate("cart")}>
                <img src={cart} width={50} alt={"cart"}/>
            </CartWrap>
            {/*useDrag*/}
            <SearchBoxOuter>
                <SearchBoxInner>
                    <SearchBoxTextOuter>
                        <HeaderTextWrap>
                            <HeaderMainText>
                                헤더 메인 텍스트 입니다
                            </HeaderMainText>
                            <Font color={"white"}>
                                배달 받으실 위치를 입력해 주세요
                            </Font>
                        </HeaderTextWrap>
                    </SearchBoxTextOuter>
                    <SearchForm/>
                </SearchBoxInner>
            </SearchBoxOuter>
        </>
    );

}
