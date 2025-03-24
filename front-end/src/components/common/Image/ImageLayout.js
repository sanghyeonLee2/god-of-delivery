import styled from "styled-components";

export const ImageWrap = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  overflow: hidden;
`;

export const ImageTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
