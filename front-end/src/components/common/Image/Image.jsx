import React from "react";
import * as S from "components/common/Image/ImageLayout";

function Image({ width, height, src }) {
  return (
    <S.ImageWrap $width={width} $height={height}>
      <S.ImageTag src={src} alt={src} />
    </S.ImageWrap>
  );
}

export default Image;
