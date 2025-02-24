import React from 'react';
import {FooterInner, FooterWrap} from "./FooterLayout";
import {Link} from "react-router-dom";
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import IconBtn from "../Button/icon/IconBtn";
import logo from "../../../assets/img/logo.png";

function Footer(props) {
    return (
        <FooterWrap>
            <FooterInner>
                <Link to={"/"}>
                    <IconBtn src={logo} alt={logo} width={110}/>
                </Link>
                <FlexOnly justify={"space-between"} width="90px">
                    <Font size={"small"} color={"gray"}>깃허브</Font>
                    <Font size={"small"} color={"gray"}>블로그</Font>
                </FlexOnly>
            </FooterInner>
        </FooterWrap>
    );
}

export default Footer;