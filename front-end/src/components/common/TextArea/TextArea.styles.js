import styled from "styled-components";
import { innerPadding } from "@assets/styles/CommonStyle";

export const TextareaTag = styled.textarea`
  margin: 1.5rem 0;
  min-height: 10rem;
  resize: none;
  width: 100%;
  ${innerPadding()};
`;
