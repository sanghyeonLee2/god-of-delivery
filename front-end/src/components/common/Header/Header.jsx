import React from 'react';
import {HeaderInner, HeaderOuter, HeaderWrapper} from "./HeaderLayout";
import {Button} from "../Button/Button";
import {Logo} from "../../../assets/styles/CommonStyle";
import {Link} from "react-router-dom";
import SearchSection from "../../section/SearchSection/SearchSection";

export function Header(props) {
    return (
        <HeaderWrapper>
            <HeaderOuter>
                <HeaderInner>
                    <Logo>배달의 신</Logo>
                    <Link to={"/sign-up"}>
                        <Button type={"button"} text={"회원가입"}/>
                    </Link>
                    <Button type={"button"} text={"로그인"}/>
                </HeaderInner>
            </HeaderOuter>
            {window.location.pathname === "/" && <SearchSection/>}
        </HeaderWrapper>
    );
}
