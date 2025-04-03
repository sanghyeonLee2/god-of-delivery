import React from "react";
import * as S from "./UserHeader.styles";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSignInState } from "@recoil/user/atoms";
import Logo from "@components/common/Logo/Logo";
import StoreSearchForm from "@pages/user/common/Header/components/StoreSearchForm";
import { isModalOpenState } from "@recoil/flag/atoms";
import { CiLogin } from "react-icons/ci";
import useSearchBoxSlide from "@pages/user/common/Header/hooks/useSearchBoxSlide";
import HeaderSignUserRight from "@pages/user/common/Header/components/HeaderSignUserRight";
import { HeaderInner, HeaderOuter } from "@assets/styles/CommonStyle";

export function UserHeader() {
  const isSignIn = useRecoilValue(isSignInState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const { searchSlideRef, searchBtnRef, isSearchOpen, setIsSearchOpen } = useSearchBoxSlide();
  return (
    <HeaderOuter>
      <S.SearchSlide $open={isSearchOpen} ref={searchSlideRef}>
        <StoreSearchForm />
      </S.SearchSlide>
      <HeaderInner>
        <S.HeaderLeft>
          <Logo />
          <StoreSearchForm />
        </S.HeaderLeft>
        {isSignIn ? (
          <HeaderSignUserRight
            setIsModalOpen={setIsModalOpen}
            setIsSearchOpen={setIsSearchOpen}
            searchBtnRef={searchBtnRef}
          />
        ) : (
          <Link to={"/sign-in"}>
            <CiLogin size={33} />
          </Link>
        )}
      </HeaderInner>
    </HeaderOuter>
  );
}
