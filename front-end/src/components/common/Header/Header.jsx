import React from 'react';
import {HeaderInner, HeaderOuter} from "./HeaderLayout";
import {Button} from "../Button/Button";
import {Logo} from "../../../assets/styles/CommonStyle";
import {Link, useNavigate} from "react-router-dom";
import SearchSection from "../../section/SearchSection/SearchSection";

export function Header(props) {
    const navigate = useNavigate()
    return (
        <>
            <HeaderOuter>
                <HeaderInner>
                    <Link to={"/"}>
                        <Logo>배달의 신</Logo>
                    </Link>
                    <Button type={"button"} text={"회원가입"} onClick={() => navigate("sign-up")}/>
                    <Button type={"button"} text={"로그인"}/>
                </HeaderInner>
            </HeaderOuter>
            {window.location.pathname === "/" && <SearchSection/>}
        </>
    );
}
