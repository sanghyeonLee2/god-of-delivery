import React from "react";
import IconBtn from "components/common/Button/icon/IconBtn";
import { CiLocationOn, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import HeaderToggle from "pages/user/common/Header/components/HeaderToggle";
import useToggleDisplay from "pages/user/common/Header/hooks/useToggleDisplay";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../../recoil/user/atoms";
import {
  HeaderRight,
  LocationBtnWrap,
} from "pages/user/common/Header/components/HeaderSignUserRightLayout";
import { Font } from "../../../../../assets/styles/CommonStyle";

function HeaderSignUserRight({ setIsModalOpen, setIsSearchOpen, searchBtnRef }) {
  const [menuRef, showMenu, hideMenu] = useToggleDisplay();
  const { address } = useRecoilValue(userInfoState);

  return (
    <HeaderRight>
      <IconBtn ref={searchBtnRef} onClick={() => setIsSearchOpen((prev) => !prev)}>
        <CiSearch size={33} />
      </IconBtn>
      <LocationBtnWrap>
        <IconBtn
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
          onClick={() => setIsModalOpen({ modalType: "주소설정", flag: true, modalData: null })}
        >
          <CiLocationOn size={33} />
        </IconBtn>
        <div ref={menuRef}>
          <Font size={"small"}>{address}</Font>
        </div>
      </LocationBtnWrap>
      <Link to={"/cart"}>
        <CiShoppingCart size={33} />
      </Link>
      <HeaderToggle />
    </HeaderRight>
  );
}

export default HeaderSignUserRight;
