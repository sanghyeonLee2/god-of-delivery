import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoSvg } from "@assets/img/logo.svg";
import { useRecoilValue } from "recoil";
import { userRoleState } from "@recoil/user/atoms";

function Logo() {
  const role = useRecoilValue(userRoleState);
  const location = useLocation();

  const targetPath = role === "user" ? "/" : "/owners/me";

  const handleClick = (e) => {
    if (location.pathname.startsWith("/auth")) {
      e.preventDefault();
    }
  };

  return (
    <Link to={targetPath} onClick={handleClick} style={{ marginRight: "20px" }}>
      <LogoSvg width="10.2rem" height="5.6rem" />
    </Link>
  );
}

export default Logo;
