import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";

export const RecommendedOuter = styled.div`
  margin: 0 auto;
  padding-bottom: 30px;
  max-width: 1100px;
  height: 100%;
`
export const RecommendTitle = styled.span`
  height: 100%;
`
export const RecommendTitleWrapper = styled.div`
  padding-top: 14px;
`
export const RecommendedInner = styled.ul`
  width: 100%;
  ${flexLayout("space-between")};
  flex-wrap: wrap;
}
`