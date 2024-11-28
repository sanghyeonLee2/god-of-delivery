import React from 'react';
import {FooterInfoInner, FooterMenuLeft, FooterMenuOuter, FooterMenuRight, FooterWrapper} from "./FooterLayout";
import {Link} from "react-router-dom";
import {Font} from "../../../assets/styles/CommonStyle";

function Footer(props) {
    return (
        <FooterWrapper>
            <FooterMenuOuter>
                <FooterMenuLeft>
                    <li>
                        <Font size={"small"} color={"gray"}>공지사항</Font>
                    </li>
                    <li>
                        <Font size={"small"} color={"gray"}>FAQ</Font>
                    </li>
                    <li>
                        <Font size={"small"} color={"gray"}>개인정보처리방침</Font>
                    </li>
                </FooterMenuLeft>
                <FooterMenuRight>
                    <li>
                        <Font size={"small"} color={"gray"}>깃허브</Font>
                    </li>
                    <li>
                        <Font size={"small"} color={"gray"}>블로그</Font>
                    </li>
                </FooterMenuRight>
            </FooterMenuOuter>
            <FooterInfoInner>
                <Link to={"/"}>
                    <h1>
                        배달의 신
                    </h1>
                </Link>
                <div>
                    <Font size={"small"} color={"gray"}>주식회사 DN</Font>
                    <br/>
                    <Font size={"small"} color={"gray"}>부산시 사상구 주례로 47 대표이사 이상현, 신유성</Font>
                </div>
            </FooterInfoInner>
        </FooterWrapper>
    );
}

export default Footer;