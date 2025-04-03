import React from "react";
import * as S from "./Footer.styles";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import Logo from "@components/common/Logo/Logo";
import { COLORS } from "@constants/style";

function Footer() {
  return (
    <S.FooterWrap>
      <S.FooterInner>
        <Logo />
        <FlexOnly justify={"space-between"} width="9rem">
          <Font size={"small"} color={COLORS.FONT.SUB}>
            깃허브
          </Font>
          <Font size={"small"} color={COLORS.FONT.SUB}>
            블로그
          </Font>
        </FlexOnly>
      </S.FooterInner>
    </S.FooterWrap>
  );
}

export default Footer;
