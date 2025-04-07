import React from "react";
import { HeaderInner, HeaderOuter } from "@assets/styles/CommonStyle";
import Logo from "@components/common/Logo/Logo";

function AuthPageHeader() {
  return (
    <HeaderOuter>
      <HeaderInner>
        <Logo />
      </HeaderInner>
    </HeaderOuter>
  );
}

export default AuthPageHeader;
