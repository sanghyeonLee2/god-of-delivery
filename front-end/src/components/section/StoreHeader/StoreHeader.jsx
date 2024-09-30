import React from 'react';
import {ReviewWrap, StoreHeaderWrap} from "./StoreHeaderLayout";

function StoreHeader(props) {
    return (
        <StoreHeaderWrap>
            <div>
                <h1>가게이름</h1>
            </div>
            <div>
                <span>별점</span>
            </div>
            <ReviewWrap>
                <p>최근리뷰</p>&nbsp;|&nbsp;<p>최근 사장님 댓글</p>
            </ReviewWrap>
        </StoreHeaderWrap>
    );
}

export default StoreHeader;