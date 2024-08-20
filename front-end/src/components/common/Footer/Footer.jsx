import React from 'react';
import {
    FooterAsideInfo,
    FooterInfoInner,
    FooterInfoOuter,
    FooterMenuInner,
    FooterMenuLeftUl,
    FooterMenuOuter,
    FooterMenuRightUl,
    FooterWrapper
} from "./FooterLayout";
import {Logo} from "../../../assets/styles/CommonStyle";
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <FooterWrapper>
            <FooterMenuOuter>
                <FooterMenuInner>
                    <FooterMenuLeftUl>
                        <li>
                            공지사항
                        </li>
                        <li>
                            FAQ
                        </li>
                        <li>
                            입점문의
                        </li>
                        <li>
                            개인정보처리방침
                        </li>
                    </FooterMenuLeftUl>
                    <FooterMenuRightUl>
                        <li>
                            깃허브
                        </li>
                        <li>
                            블로그
                        </li>
                    </FooterMenuRightUl>
                </FooterMenuInner>
            </FooterMenuOuter>
            <FooterInfoOuter>
                <FooterInfoInner>
                    <Link to={"/"}>
                        <Logo>
                            배달의 신
                        </Logo>
                    </Link>
                    <FooterAsideInfo>
                        <strong>주식회사 DN</strong>
                        <p>부산시 사상구 주례로 47 대표이사 이상현, 신유성</p>
                        <p>고객센터: hyeon012366@gmail.com</p>
                        <p>호스팅 제공자: 이상현</p>
                    </FooterAsideInfo>
                </FooterInfoInner>
            </FooterInfoOuter>
        </FooterWrapper>
    );
}

export default Footer;