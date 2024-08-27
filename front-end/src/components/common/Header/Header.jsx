import React from 'react';
import {HeaderInner, HeaderOuter} from "./HeaderLayout";
import {Button} from "../Button/Button";
import {Logo} from "../../../assets/styles/CommonStyle";
import {Link} from "react-router-dom";
import SearchSection from "../../section/SearchSection/SearchSection";
import {useMove} from "../../../hooks/useMove";
import {useRecoilState} from "recoil";
import {isSignInState} from "../../../recoil/user/atoms";

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
                    {isSignIn ? <Button type={"button"} text={"로그아웃"} onClick={
                            () => {
                                localStorage.removeItem("access-token")
                                localStorage.removeItem("refresh-token")
                                setIsSignIn(false)
                            }
                        }/> :
                        <>
                            <Button type={"button"} text={"회원가입"} onClick={() => navigate("sign-up")}/>
                            <Button type={"button"} text={"로그인"} onClick={() => navigate("sign-in")}/>
                        </>}
                </HeaderInner>
            </HeaderOuter>
            {(window.location.pathname === "/" || window.location.pathname.startsWith("/category-info")) &&
                <SearchSection/>}
        </>
    );
}
