import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../../assets/img/logo.svg";

function Logo() {
  return (
    <Link to="/" style={{ paddingRight: "20px" }}>
      <LogoSvg width="102" height="56" />
    </Link>
  );
}

export default Logo;
