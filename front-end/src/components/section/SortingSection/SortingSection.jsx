import React from 'react';
import {SortingInner, SortingOuter, SortingSelect} from "./SortingSectionLayout";

function SortingSection(props) {
    return (
        <SortingOuter>
            <SortingInner>
                <SortingSelect>
                    <option>기본 정렬순</option>
                    <option>별점 순</option>
                    <option>리뷰 많은 순</option>
                    <option>최소 주문 금액 순</option>
                    <option>거리 순</option>
                    <option>배달시간 순</option>
                </SortingSelect>
            </SortingInner>
        </SortingOuter>
    );
}

export default SortingSection;