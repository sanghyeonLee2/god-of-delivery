import React from 'react';
import {HeaderInner, HeaderOuter, SearchBoxOuter, UserMenuWrap} from "./HeaderLayout";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {isSignInState, userInfoState} from "../../../recoil/user/atoms";
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import IconBtn from "../Button/icon/IconBtn";
import myPage from "../../../assets/img/my-page.png";
import location_on from "../../../assets/img/location_on.png"
import logo from "../../../assets/img/logo.png"
import login from "../../../assets/img/login.png"
import {isModalOpenState} from "../../../recoil/flag/atoms";
import StoreSearchForm from "../../forms/SearchForm/StoreSearchForm";
import useToggleDisplay from "../../../hooks/useToggleDisplay";

export function Header() {
    const location = useLocation();
    const navigate = useNavigate()
    const [isSignIn, setIsSignIn] = useRecoilState(isSignInState)
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const userInfo = useRecoilValue(userInfoState)
    const [menuRef, showMenu, hideMenu] = useToggleDisplay();
    return (
        <>
            <HeaderOuter>
                <HeaderInner>
                    <Link to={"/"}>
                        <IconBtn src={logo} alt={logo} width={110}/>
                    </Link>
                    <FlexOnly>
                        <IconBtn src={location_on} width={26} onClick={
                            () => {
                                setIsModalOpen({modalType: "주소설정", modalFlag: true, modalIdData: null})
                            }}>
                            {isSignIn ? <Font> {userInfo.address}</Font> :
                                <Font size={"small"}>주소를 설정해 주세요</Font>}
                        </IconBtn>
                    </FlexOnly>
                    {isSignIn ?
                        <UserMenuWrap onMouseEnter={showMenu} onMouseLeave={hideMenu}>
                            <IconBtn src={myPage} width={35}/>
                            <ul ref={menuRef}>
                                <li>
                                    <Link to={"/cart"}>
                                        <Font>장바구니</Font>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/my-reviews?page=1"}>
                                        <Font>리뷰 관리</Font>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/orders?page=1"}>
                                        <Font>주문 관리</Font>
                                    </Link>
                                </li>
                                <li onClick={
                                    () => {
                                        localStorage.removeItem("access-token")
                                        localStorage.removeItem("refresh-token")
                                        setIsSignIn(false)
                                        navigate("/")
                                    }}>
                                    <Font>로그아웃</Font>
                                </li>
                            </ul>
                        </UserMenuWrap>
                        :
                        <Link to={"/sign-in"}>
                            <IconBtn src={login} width={35}/>
                        </Link>}
                </HeaderInner>
            </HeaderOuter>
            {(location.pathname === "/" || location.pathname.includes("/store")) &&
                <SearchBoxOuter>
                    <section>
                        <h2>
                            헤더 메인 텍스트 입니다
                        </h2>
                        <Font color={"white"}>
                            배달 받으실 위치를 입력해 주세요
                        </Font>
                    </section>
                    <StoreSearchForm/>
                </SearchBoxOuter>
            }
        </>
    );

}
