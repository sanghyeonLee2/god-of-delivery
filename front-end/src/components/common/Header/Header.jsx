import React from 'react';
import {HeaderInner, HeaderOuter} from "./HeaderLayout";
import {Button} from "../Button/Button";
import {Logo} from "../../../assets/styles/CommonStyle";
import {Link} from "react-router-dom";
import SearchSection from "../../section/SearchSection/SearchSection";
import {useMove} from "../../../hooks/useMove";

export function Header(props) {
    const navigate = useMove()
    return (
        <>
            <HeaderOuter>
                <HeaderInner>
                    <Link to={"/"}>
                        <Logo>배달의 신</Logo>
                    </Link>
                    <Button type={"button"} text={"회원가입"} onClick={() => navigate("sign-up")}/>
                    <Button type={"button"} text={"로그인"} onClick={() => navigate("sign-in")}/>
                </HeaderInner>
            </HeaderOuter>
            {(window.location.pathname === "/" || window.location.pathname.startsWith("/category-info")) &&
                <SearchSection/>}
        </>
    );
}
