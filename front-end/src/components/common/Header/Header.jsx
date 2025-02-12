import React from 'react';
import {HeaderWrap, SearchBoxOuter} from "./HeaderLayout";
import {Link} from "react-router-dom";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {isSignInState, userInfoState} from "../../../recoil/user/atoms";
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import SearchForm from "../../forms/SearchForm/SearchForm";
import IconBtn from "../Button/icon/IconBtn";
import myPage from "../../../assets/img/my-page.png";
import cart from "../../../assets/img/cart.png"
import logout from "../../../assets/img/logout.png"
import location_on from "../../../assets/img/location_on.png"
import logo from "../../../assets/img/logo.png"
import {isModalOpenState} from "../../../recoil/flag/atoms";

export function Header() {
    const [isSignIn, setIsSignIn] = useRecoilState(isSignInState)
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const userInfo = useRecoilValue(userInfoState)
    return (
        <>
            <HeaderWrap>
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
                <FlexOnly justify="space-between" width={"80px"}>
                    <Link to={"/cart"}>
                        <IconBtn src={cart} width={26}/>
                    </Link>
                    {isSignIn ?
                        <IconBtn type={"button"} src={logout} width={26} onClick={
                            () => {
                                localStorage.removeItem("access-token")
                                localStorage.removeItem("refresh-token")
                                setIsSignIn(false)
                            }
                        }/>
                        :
                        <Link to={"/sign-in"}>
                            <IconBtn src={myPage} width={26}/>
                        </Link>}
                </FlexOnly>
            </HeaderWrap>
            <SearchBoxOuter>
                <section>
                    <h2>
                        헤더 메인 텍스트 입니다
                    </h2>
                    <Font color={"white"}>
                        배달 받으실 위치를 입력해 주세요
                    </Font>
                </section>
                <SearchForm/>
            </SearchBoxOuter>
        </>
    );

}
