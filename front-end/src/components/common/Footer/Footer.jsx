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
          <a href="https://github.com/sanghyeonLee2/god-of-delivery">
            <Font size={"small"} color={COLORS.FONT.SUB}>
              깃허브
            </Font>
          </a>
          <Font size={"small"} color={COLORS.FONT.SUB}>
            블로그
          </Font>
        </FlexOnly>
      </S.FooterInner>
    </S.FooterWrap>
  );
}

export default Footer;
