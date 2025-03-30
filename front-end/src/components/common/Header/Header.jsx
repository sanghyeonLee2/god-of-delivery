import React from "react";
import * as S from "./HeaderLayout";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSignInState } from "../../../recoil/user/atoms";
import useAuth from "./hooks/useAuth";
import Logo from "components/common/Logo/Logo";
import StoreSearchForm from "components/common/HomeBoard/components/StoreSearchForm";
import { isModalOpenState } from "../../../recoil/flag/atoms";
import { CiLogin } from "react-icons/ci";
import useSearchBoxSlide from "components/common/Header/hooks/useSearchBoxSlide";
import HeaderSignUserRight from "components/common/Header/components/HeaderSignUserRight";

export function Header() {
  useAuth();
  const isSignIn = useRecoilValue(isSignInState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const { searchSlideRef, searchBtnRef, isSearchOpen, setIsSearchOpen } = useSearchBoxSlide();

  return (
    <S.HeaderOuter>
      <S.SearchSlide $open={isSearchOpen} ref={searchSlideRef}>
        <StoreSearchForm />
      </S.SearchSlide>
      <S.HeaderInner>
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
      </S.HeaderInner>
    </S.HeaderOuter>
  );
}
