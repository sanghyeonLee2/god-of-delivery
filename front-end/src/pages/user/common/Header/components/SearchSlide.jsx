import React from "react";
import StoreSearchForm from "@pages/user/common/Header/components/StoreSearchForm";
import useSearchBoxSlide from "@pages/user/common/Header/hooks/useSearchBoxSlide";
import { CiSearch } from "react-icons/ci";
import IconBtn from "@components/common/Button/icon/IconBtn";
import { SearchSlideWrap } from "@pages/user/common/Header/components/SearchSlide.styles";

function SearchSlide() {
  const { searchSlideRef, searchBtnRef, isSearchOpen, setIsSearchOpen } = useSearchBoxSlide();
  return (
    <>
      <IconBtn ref={searchBtnRef} onClick={() => setIsSearchOpen((prev) => !prev)}>
        <CiSearch size={33} />
      </IconBtn>
      <SearchSlideWrap $open={isSearchOpen} ref={searchSlideRef}>
        <StoreSearchForm />
      </SearchSlideWrap>
    </>
  );
}

export default SearchSlide;
