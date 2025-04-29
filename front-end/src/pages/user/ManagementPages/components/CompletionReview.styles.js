import styled from "styled-components";
import { COLORS } from "@constants/style";
import { flexLayout } from "@assets/styles/Mixin";

export const CompletionReviewWrap = styled.div`
  ${flexLayout("center", "center")};
  margin-top: 1rem;
  height: 4rem;
  border-radius: 0.4rem;
  border: 1px solid ${COLORS.BORDER};
`;
