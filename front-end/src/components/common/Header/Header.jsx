import React from "react";
import * as S from "./HeaderLayout";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isSignInState } from "../../../recoil/user/atoms";
import HeaderToggle from "components/common/Header/components/HeaderToggle";
import HeaderLocation from "components/common/Header/components/HeaderLocation";
import { PiShoppingCartSimpleBold, PiSignInBold } from "react-icons/pi";
import useAuth from "./hooks/useAuth";
import { FlexOnly } from "../../../assets/styles/CommonStyle";
import Logo from "components/common/Logo/Logo";

export function Header() {
  const isSignIn = useRecoilValue(isSignInState);
  useAuth();
  return (
    <S.HeaderOuter>
      <S.HeaderInner>
        <Logo />
        {isSignIn ? (
          <>
            <HeaderLocation />
            <FlexOnly justify={"space-between"} width={"75px"}>
              <Link to={"/cart"}>
                <PiShoppingCartSimpleBold size={35} />
              </Link>
              <HeaderToggle />
            </FlexOnly>
          </>
        ) : (
          <Link to={"/sign-in"}>
            <PiSignInBold size={35} />
          </Link>
        )}
      </S.HeaderInner>
    </S.HeaderOuter>
  );
}
