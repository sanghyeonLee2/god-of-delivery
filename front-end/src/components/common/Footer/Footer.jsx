import React from 'react';
import {FooterInfoInner, FooterMenuLeft, FooterMenuOuter, FooterMenuRight, FooterWrapper} from "./FooterLayout";
import {Link} from "react-router-dom";
import {SmallSizeFont} from "../../../assets/styles/CommonStyle";

function Footer(props) {
    return (
        <FooterWrapper>
            <FooterMenuOuter>
                <FooterMenuLeft>
                    <li>
                        <SmallSizeFont>공지사항</SmallSizeFont>
                    </li>
                    <li>
                        <SmallSizeFont>FAQ</SmallSizeFont>
                    </li>
                    <li>
                        <SmallSizeFont>개인정보처리방침</SmallSizeFont>
                    </li>
                </FooterMenuLeft>
                <FooterMenuRight>
                    <li>
                        <SmallSizeFont>깃허브</SmallSizeFont>
                    </li>
                    <li>
                        <SmallSizeFont>블로그</SmallSizeFont>
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
                    <SmallSizeFont>주식회사 DN</SmallSizeFont>
                    <br/>
                    <SmallSizeFont>부산시 사상구 주례로 47 대표이사 이상현, 신유성</SmallSizeFont>
                </div>
            </FooterInfoInner>
        </FooterWrapper>
    );
}

export default Footer;