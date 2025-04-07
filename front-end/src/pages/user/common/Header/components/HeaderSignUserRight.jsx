import React from "react";
import IconBtn from "@components/common/Button/icon/IconBtn";
import { CiLocationOn, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import HeaderToggle from "@pages/user/common/Header/components/HeaderToggle";
import useToggleDisplay from "@pages/user/common/Header/hooks/useToggleDisplay";
import { useRecoilValue } from "recoil";
import { userAddressState } from "@recoil/user/atoms";
import {
  HeaderRight,
  LocationBtnWrap,
} from "@pages/user/common/Header/components/HeaderSignUserRight.styles";
import { Font } from "@assets/styles/CommonStyle";
import SearchSlide from "@pages/user/common/Header/components/SearchSlide";
import useOpenModal from "@hooks/useOpenModal";
import { MODAL_TYPES } from "@constants/modalTypes";

function HeaderSignUserRight() {
  const [menuRef, showMenu, hideMenu] = useToggleDisplay();
  const address = useRecoilValue(userAddressState);
  const openModal = useOpenModal();

  return (
    <HeaderRight>
      <SearchSlide />
      <LocationBtnWrap>
        <IconBtn
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
          onClick={() => openModal(MODAL_TYPES.SELECT_ADDRESS, {})}
        >
          <CiLocationOn size={33} />
        </IconBtn>
        <div ref={menuRef}>
          <Font size={"small"}>{address}</Font>
        </div>
      </LocationBtnWrap>
      <Link to={"cart"}>
        <CiShoppingCart size={33} />
      </Link>
      <HeaderToggle />
    </HeaderRight>
  );
}

export default HeaderSignUserRight;
