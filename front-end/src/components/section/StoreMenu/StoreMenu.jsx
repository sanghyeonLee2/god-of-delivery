import React from 'react';
import {InfoBox, RecommendWrap} from "./StoreMenuLayout";

function StoreMenu() {
    return (
        <div>
            <InfoBox>
                <div>
                    <span>가게 안내</span>
                </div>
            </InfoBox>
            <RecommendWrap> {/*컴포넌트로 만들고 재사용*/}
                <li>매뉴 객체</li>
            </RecommendWrap>
        </div>
    );
}

export default StoreMenu;