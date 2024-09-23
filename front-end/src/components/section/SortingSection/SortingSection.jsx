import React from 'react';
import {SortingInner, SortingOuter, SortingSelect} from "./SortingSectionLayout";
import {useSetRecoilState} from "recoil";
import {sortingState} from "../../../recoil/search/atoms";

function SortingSection(props) {
    const setSorting = useSetRecoilState(sortingState)
    return (
        <SortingOuter>
            <SortingInner>
                <SortingSelect defaultValue={"storedId"} onChange={(e) => {
                    setSorting(e.target.value)
                }}>
                    <option value={"storeId"}>기본 정렬순</option>
                    <option value={"rating"}> 별점 순</option>
                    <option value={"reviewCnt"}>리뷰 많은 순</option>
                    <option value={"minDeliveryPrice"}> 최소 주문 금액 순</option>
                    <option>거리 순</option>
                    <option value={"maxDeliveryTime"}>배달시간 순</option>
                </SortingSelect>
            </SortingInner>
        </SortingOuter>
    );
}

export default SortingSection;