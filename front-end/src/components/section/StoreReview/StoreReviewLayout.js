import styled from "styled-components";
import {exampleColor, innerPadding, outerPadding} from "../../../assets/styles/CommonStyle";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const StoreReviewWrap = styled.div`
    min-height: 1300px;
    ${outerPadding()}
`
export const CeoNoticeTitleWrap = styled.div`
    ${flexLayout("space-between", "center")}
`
export const ImgWrap = styled.ul`
    ${exampleColor()};
    min-height: 200px;
`
export const ReviewNoticeWrap = styled.li`
    padding-top: 20px`

//분리
export const RatingInner = styled.div`
    ${flexLayout("space-between", "center")}
`
export const RatingOuter = styled.div`
    height: 430px;
    margin-bottom: 40px;
`
export const TotalRatingWrap = styled.div`
    ${flexLayout("center", "center")};
    flex-direction: column;
    ${elementSize("40%", "250px")}
`
export const RatingText = styled.span`
    font-size: 30px`
export const RatingChartWrap = styled.div`
    width: 50%`
export const LineChartWrap = styled.div`
    padding: 0 20px;
    height: 180px;
`

//분리
export const CurrentReviewWrap = styled.div`
    ${outerPadding()};
    min-height: 300px`

export const ReviewSortingWrap = styled.div`
    padding-top: 15px;
    width: 240px;
    ${flexLayout("space-between", "center")};
`

export const SortBtn = styled.div`
    background-color: #F6F6F6;
    border-radius: 10px;
    text-align: center;
    padding: 0 20px;
    align-content: center;
    height: 40px;
    margin-bottom: 40px;
`
export const UserReviewWrap = styled.div`
    min-height: 150px;
    display: flex;
    position: relative;
`
export const UserReviewInfoWrap = styled.div`
    padding-top: 15px;;
`
export const UserIconWrap = styled.div`
    ${elementSize("80px", "80px")}
    ${flexLayout("center", "center")}
`
export const UserIcon = styled.div`
    border-radius: 30px;
    background-color: gray;
    ${elementSize("50px", "50px")})
`
export const OrderedMenuWrap = styled.div`
    height: 25px;
    ${innerPadding()};
    border-radius: 20px;
    position: absolute;
    top: 85px;
    left: 30px;
    border: 1px solid gray;
`
