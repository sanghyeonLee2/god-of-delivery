import React from 'react';
import {
    HeaderMainText,
    HeaderTextWrap,
    HeaderWrap,
    SearchBoxInner,
    SearchBoxOuter,
    SearchBoxTextOuter
} from "./HeaderLayout";
import {Link} from "react-router-dom";
import {useRecoilState} from "recoil";
import {isSignInState} from "../../../recoil/user/atoms";
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import SearchForm from "../../forms/SearchForm/SearchForm";
import IconBtn from "../Button/icon/IconBtn";
import myPage from "../../../assets/img/my-page.png";
import cart from "../../../assets/img/cart.png"
import logout from "../../../assets/img/logout.png"

export function Header({currentAddress}) {
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
                <FlexOnly justify="space-between" width={"70px"}>
                    <Link to={"/cart"}>
                        <IconBtn src={cart} width={26}/>
                    </Link>
                    {isSignIn ?
                        <IconBtn type={"button"} src={logout} width={26} onClick={
                            () => {
                                localStorage.removeItem("access-token")
                                localStorage.removeItem("refresh-token")
                                setIsSignIn(false)
                            }
                        }/> :
                        <Link to={"/sign-in"}>
                            <IconBtn src={myPage} width={26}/>
                        </Link>}
                </FlexOnly>
            </HeaderWrap>
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
