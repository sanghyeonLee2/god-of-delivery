import styled from "styled-components";
import { innerPadding } from "../../../assets/styles/CommonStyle";
import { flexLayout } from "../../../assets/styles/Mixin";

export const OwnerReviewWrap = styled.form`
  margin: 15px 0;
  border-radius: 10px;
  ${innerPadding()};
  background-color: #f0f0f0;
`;

export const ReviewBtnWrap = styled.div`
  width: 130px;
  ${flexLayout("space-between")};
  margin-left: auto;
  flex-direction: row;
`;
