import React from "react";
import { UserMenuWrap } from "components/common/Header/HeaderLayout";
import { Link } from "react-router-dom";
import { Font } from "../../../../assets/styles/CommonStyle";
import useToggleDisplay from "../hooks/useToggleDisplay";
import useSignOut from "../hooks/useSignOut";
import { MdOutlinePersonOutline } from "react-icons/md";

function HeaderToggle(props) {
  const [menuRef, showMenu, hideMenu] = useToggleDisplay();
  const handleSignOut = useSignOut();
  return (
    <UserMenuWrap onMouseEnter={showMenu} onMouseLeave={hideMenu}>
      <MdOutlinePersonOutline size={35} />
      <ul ref={menuRef}>
        <li>
          <Link to={"/cart"}>
            <Font>장바구니</Font>
          </Link>
        </li>
        <li>
          <Link to={"users/me/reviews"}>
            <Font>리뷰 관리</Font>
          </Link>
        </li>
        <li>
          <Link to={"users/me/dibs"}>
            <Font>찜</Font>
          </Link>
        </li>
        <li>
          <Link to={"users/me/orders"}>
            <Font>주문 관리</Font>
          </Link>
        </li>
        <li onClick={handleSignOut}>
          <Font>로그아웃</Font>
        </li>
      </ul>
    </UserMenuWrap>
  );
}

export default HeaderToggle;
