import React from "react";
import * as S from "./UserHeader.styles";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isSignInState } from "@recoil/user/atoms";
import Logo from "@components/common/Logo/Logo";
import StoreSearchForm from "@pages/user/common/Header/components/StoreSearchForm";
import { CiLogin } from "react-icons/ci";
import HeaderSignUserRight from "@pages/user/common/Header/components/HeaderSignUserRight";
import { HeaderInner, HeaderOuter } from "@assets/styles/CommonStyle";

export function UserHeader() {
  const isSignIn = useRecoilValue(isSignInState);

  return (
    <HeaderOuter>
      <HeaderInner>
        <S.HeaderLeft>
          <Logo />
          <StoreSearchForm />
        </S.HeaderLeft>
        {isSignIn ? (
          <HeaderSignUserRight />
        ) : (
          <Link to={"/sign-in"}>
            <CiLogin size={33} />
          </Link>
        )}
      </HeaderInner>
    </HeaderOuter>
  );
}
