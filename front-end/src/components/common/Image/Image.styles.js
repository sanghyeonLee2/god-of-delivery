import styled from "styled-components";
import { elementSize } from "@assets/styles/Mixin";

export const ImageWrap = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  overflow: hidden;
  flex-shrink: 0;
`;

export const ImageTag = styled.img`
  object-fit: cover;
  border-radius: 10px;

  ${elementSize("100%", "100%")};
`;
