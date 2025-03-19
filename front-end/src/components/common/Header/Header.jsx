import React from 'react';
import * as S from "./HeaderLayout";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {isSignInState} from "../../../recoil/user/atoms";
import HeaderToggle from "components/common/Header/components/HeaderToggle";
import HeaderLocation from "components/common/Header/components/HeaderLocation";
import {PiSignInBold} from "react-icons/pi";
import useAuth from "../../../hooks/useAuth";

export function Header() {
    const isSignIn = useRecoilValue(isSignInState)
    useAuth()
    return (
        <S.HeaderOuter>
            <S.HeaderInner>
                <Link to={"/"}>
                    <h1>배달의 신</h1>
                </Link>
                {isSignIn ?
                    <>
                        <HeaderLocation/>
                        <HeaderToggle/>
                    </> :
                    <Link to={"/sign-in"}>
                        <PiSignInBold size={35}/>
                    </Link>}
            </S.HeaderInner>
        </S.HeaderOuter>
    );

}
