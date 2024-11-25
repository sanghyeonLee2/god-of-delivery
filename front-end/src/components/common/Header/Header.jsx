import React from 'react';
import {CartWrap, HeaderWrap} from "./HeaderLayout";
import {MainBtn} from "../Button/main/MainButton";
import {Link} from "react-router-dom";
import {useMove} from "../../../hooks/useMove";
import {useRecoilState} from "recoil";
import {isSignInState} from "../../../recoil/user/atoms";
import SearchSection from "../../section/SearchSection/SearchSection";
import cart from "../../../assets/img/cart.png"

export function Header({currentAddress}) {
    const navigate = useMove()
    const [isSignIn, setIsSignIn] = useRecoilState(isSignInState)
    return (
        <>
            <HeaderWrap>
                <Link to={"/"}>
                    <h1>배달의 신</h1>
                </Link>
                <Link to={"/select-address"}>
                    <p>{currentAddress}</p>
                </Link>
                {isSignIn ? <MainBtn type={"button"} text={"로그아웃"} onClick={
                        () => {
                            localStorage.removeItem("access-token")
                            localStorage.removeItem("refresh-token")
                            setIsSignIn(false)
                        }
                    }/> :
                    <MainBtn type={"button"} text={"회원가입/로그인"} onClick={() => navigate("sign-up")}/>}
            </HeaderWrap>
            <CartWrap>
                <img src={cart} width={50} alt={"cart"}/>
            </CartWrap>
            {/*useDrag*/}
            <SearchSection/>
        </>
    );

}
