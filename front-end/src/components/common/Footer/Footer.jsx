import React from "react";
import { FooterInner, FooterWrap } from "./FooterLayout";
import { FlexOnly, Font } from "../../../assets/styles/CommonStyle";
import Logo from "components/common/Logo/Logo";

function Footer(props) {
  return (
    <FooterWrap>
      <FooterInner>
        <Logo />
        <FlexOnly justify={"space-between"} width="90px">
          <Font size={"small"} color={"gray"}>
            깃허브
          </Font>
          <Font size={"small"} color={"gray"}>
            블로그
          </Font>
        </FlexOnly>
      </FooterInner>
    </FooterWrap>
  );
}

export default Footer;
