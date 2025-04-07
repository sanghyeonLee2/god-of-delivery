import React from "react";
import { UserMenuWrap } from "@pages/user/common/Header/UserHeader.styles";
import { Link } from "react-router-dom";
import { Font } from "@assets/styles/CommonStyle";
import { CiUser } from "react-icons/ci";
import useSignOut from "@hooks/useSignOut";
import useToggleDisplay from "@pages/user/common/Header/hooks/useToggleDisplay";

function HeaderToggle() {
  const [menuRef, showMenu, hideMenu] = useToggleDisplay();
  const handleSignOut = useSignOut();
  return (
    <UserMenuWrap onMouseEnter={showMenu} onMouseLeave={hideMenu}>
      <CiUser size={35} />
      <ul ref={menuRef}>
        <li>
          <Link to={"/cart"}>
            <Font size={"small"}>장바구니</Font>
          </Link>
        </li>
        <li>
          <Link to={"/reviews"}>
            <Font size={"small"}>리뷰 관리</Font>
          </Link>
        </li>
        <li>
          <Link to={"/dibs"}>
            <Font size={"small"}>찜</Font>
          </Link>
        </li>
        <li>
          <Link to={"/orders"}>
            <Font size={"small"}>주문 관리</Font>
          </Link>
        </li>
        <li onClick={handleSignOut}>
          <Font size={"small"}>로그아웃</Font>
        </li>
      </ul>
    </UserMenuWrap>
  );
}

export default HeaderToggle;
