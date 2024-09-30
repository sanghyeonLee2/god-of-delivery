import React, {forwardRef} from 'react';
import {InfoBox, MenuWrap, RecommendWrap} from "./StoreMenuLayout";

const StoreMenu = forwardRef((props, ref) => {
    return (
        <MenuWrap ref={ref}>
            <InfoBox>
                <div>
                    <span>가게 안내</span>
                </div>
            </InfoBox>
            <RecommendWrap> {/*컴포넌트로 만들고 재사용*/}
                <li>매뉴 객체</li>
            </RecommendWrap>
        </MenuWrap>
    );
})

export default StoreMenu;