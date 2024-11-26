import React from 'react';
import {
    LeftMenuInfo,
    MenuBoxWrap,
    MenuDescriptionWrap,
    MenuInfoInner,
    MenuPicture,
    MenuPriceWrap,
    MenuReviewWrap,
    MenuTitleWrap,
    Popular,
    RecommendWrap
} from "./MenuBoxLayout";
import {
    DividingLine,
    MiddleSizeFont,
    MiddleSizeTitleFont,
    SmallSizeFont,
    SmallSizeTitleFont,
    VerticalSpace
} from "../../../assets/styles/CommonStyle";

function MenuBox({menuInfo}) {
    return (
        <MenuBoxWrap>
            <MiddleSizeTitleFont>
                <p>{menuInfo.menuTitle}</p>
            </MiddleSizeTitleFont>
            {menuInfo.items?.map((ele) =>
                <div key={ele.menuName}>
                    <MenuInfoInner>
                        <LeftMenuInfo>
                            <ul>
                                <MenuTitleWrap>
                                    <SmallSizeTitleFont>
                                        {ele.isPopular && <Popular>
                                            <span>인기</span>
                                        </Popular>}
                                        <p>{ele.menuName}</p>
                                    </SmallSizeTitleFont>
                                </MenuTitleWrap>
                                <MenuDescriptionWrap>
                                    <MiddleSizeFont color={"gray"}>
                                        {ele?.description}
                                    </MiddleSizeFont>
                                </MenuDescriptionWrap>
                                <MenuPriceWrap>
                                    <MiddleSizeFont>
                                        {ele.price}원
                                    </MiddleSizeFont>
                                </MenuPriceWrap>
                                {ele?.isOwnerRecommend &&
                                    <RecommendWrap>
                                        <div>사장님 추천</div>
                                    </RecommendWrap>}
                                <MenuReviewWrap>
                                    <SmallSizeFont color={"gray"}>리뷰{ele.menuReviewCnt}</SmallSizeFont>
                                </MenuReviewWrap>
                            </ul>
                        </LeftMenuInfo>
                        <MenuPicture/>
                    </MenuInfoInner>
                    <DividingLine/>
                </div>
            )}
            <VerticalSpace/>
        </MenuBoxWrap>
    );
}

export default MenuBox;