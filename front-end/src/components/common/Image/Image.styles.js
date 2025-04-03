import styled from "styled-components";
import { elementSize } from "@assets/styles/Mixin";

export const ImageWrap = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  overflow: hidden;
  border-radius: 10px;
`;

export const ImageTag = styled.img`
  border-radius: 10px;
  ${elementSize("100%", "100%")};
  overflow: hidden;
`;
