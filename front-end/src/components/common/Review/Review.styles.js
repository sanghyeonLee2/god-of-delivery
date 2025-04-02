import styled from "styled-components";
import { innerPadding } from "../../../assets/styles/CommonStyle";
import { flexLayout } from "../../../assets/styles/Mixin";

export const OwnerReviewWrap = styled.form`
  margin: 1.5rem 0;
  border-radius: 1rem;
  ${innerPadding()};
  background-color: #f0f0f0;
`;

export const ReviewBtnWrap = styled.div`
  width: 13rem;
  ${flexLayout("space-between")};
  margin-left: auto;
  flex-direction: row;
`;
