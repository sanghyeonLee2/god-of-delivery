import React from 'react';
import {HeaderInner, HeaderOuter} from "./HeaderLayout";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {isSignInState} from "../../../recoil/user/atoms";
import IconBtn from "../Button/icon/IconBtn";
import logo from "../../../assets/img/logo.png"
import login from "../../../assets/img/login.png"
import HeaderLocation from "components/common/Header/components/HeaderLocation";
import HeaderToggle from "components/common/Header/components/HeaderToggle";
import Loading from "components/common/Loading/Loading";
import useAuth from "../../../hooks/useAuth";

export function Header() {
    const isSignIn = useRecoilValue(isSignInState)
    const isCheckingAuth = useAuth()
    if (isCheckingAuth) {
        return <Loading/>
    }
    return (
        <HeaderOuter>
            <HeaderInner>
                <Link to={"/"}>
                    <IconBtn src={logo} alt={logo} width={110}/>
                </Link>
                {isSignIn ?
                    <>
                        <HeaderLocation/>
                        <HeaderToggle/>
                    </> :
                    <Link to={"/sign-in"}>
                        <IconBtn src={login} width={35}/>
                    </Link>}
            </HeaderInner>
        </HeaderOuter>
    );

}
