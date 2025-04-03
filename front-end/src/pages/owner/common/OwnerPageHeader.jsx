import React from "react";
import Logo from "@components/common/Logo/Logo";
import { HeaderInner, HeaderOuter } from "@assets/styles/CommonStyle";
import IconBtn from "@components/common/Button/icon/IconBtn";
import { CiLogout } from "react-icons/ci";
import useSignOut from "@hooks/useSignOut";

function OwnerPageHeader() {
  const handleSignOut = useSignOut();
  return (
    <HeaderOuter>
      <HeaderInner>
        <Logo />
        <IconBtn>
          <CiLogout size={33} onClick={handleSignOut} />
        </IconBtn>
      </HeaderInner>
    </HeaderOuter>
  );
}

export default OwnerPageHeader;
