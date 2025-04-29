import React from "react";
import * as S from "@components/common/Image/Image.styles";

function Image({ width, height, src, alt }) {
  return (
    <S.ImageWrap $width={width} $height={height}>
      <S.ImageTag src={src} alt={alt || src} />
    </S.ImageWrap>
  );
}

export default Image;
