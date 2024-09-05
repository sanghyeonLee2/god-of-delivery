import React from 'react';
import {HeaderInner, HeaderOuter} from "./HeaderLayout";
import {MainButton} from "../Button/main/MainButton";
import {Logo} from "../../../assets/styles/CommonStyle";
import {Link} from "react-router-dom";
import {useMove} from "../../../hooks/useMove";
import {useRecoilState} from "recoil";
import {isSignInState} from "../../../recoil/user/atoms";
import SearchSection from "../../section/SearchSection/SearchSection";

export function Header(props) {
    const navigate = useMove()
    const [isSignIn, setIsSignIn] = useRecoilState(isSignInState)
    return (
        <>
            <HeaderOuter>
                <HeaderInner>
                    <Link to={"/"}>
                        <Logo>배달의 신</Logo>
                    </Link>
                    {isSignIn ? <MainButton type={"button"} text={"로그아웃"} onClick={
                            () => {
                                localStorage.removeItem("access-token")
                                localStorage.removeItem("refresh-token")
                                setIsSignIn(false)
                            }
                        }/> :
                        <>
                            <MainButton type={"button"} text={"회원가입"} onClick={() => navigate("sign-up")}/>
                            <MainButton type={"button"} text={"로그인"} onClick={() => navigate("sign-in")}/>
                        </>}
                </HeaderInner>
            </HeaderOuter>
            <SearchSection/>
        </>
    );
}
