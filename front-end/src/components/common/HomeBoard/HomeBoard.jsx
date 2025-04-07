import React from "react";
import * as S from "./HomeBoard.styles";
import useAniTitle from "./hooks/useAniTitle";
import { useRecoilValue } from "recoil";
import { userAddressState } from "@recoil/user/atoms";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";

const DEFAULT_ADDRESS = "해운대로 34";

function HomeBoard() {
  const { index, isAnimating, duplicatedList } = useAniTitle();
  const address = useRecoilValue(userAddressState);
  return (
    <S.HomeBoardOuter>
      <S.HomeBoardInner>
        <FlexOnly>
          <S.HomeBoardLocation>{address || DEFAULT_ADDRESS}</S.HomeBoardLocation>{" "}
          <Font size="large">에서</Font>
        </FlexOnly>
        <S.TitleFont>
          <S.KeywordLine>
            <S.KeywordWrap>
              <S.KeywordSlider $index={index} $animate={isAnimating}>
                {duplicatedList.map((item, idx) => (
                  <S.KeywordItem key={`${item.text + idx}`} $color={item.color}>
                    {item.emoji} {item.text}
                  </S.KeywordItem>
                ))}
              </S.KeywordSlider>
            </S.KeywordWrap>{" "}
            <span>찾고 계신가요?</span>
          </S.KeywordLine>
        </S.TitleFont>
      </S.HomeBoardInner>
      <S.FullWidthLine />
    </S.HomeBoardOuter>
  );
}

export default React.memo(HomeBoard);
