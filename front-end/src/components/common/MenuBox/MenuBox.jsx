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
import {DividingLine, Font, VerticalSpace} from "../../../assets/styles/CommonStyle";
import {useSetRecoilState} from "recoil";
import {isModalOpenState, modalDataState} from "../../../recoil/flag/atoms";

function MenuBox({menuInfo}) {
    const setIsModalOpenWithDataState = useSetRecoilState(isModalOpenState);
    const setModalDataState = useSetRecoilState(modalDataState);
    return (
        <MenuBoxWrap>
            <Font size={"x-large"}>
                {menuInfo.menuTitle}
            </Font>
            {menuInfo.items?.map((ele) =>
                <div key={ele.menuName} onClick={() => {
                    setModalDataState({
                        price: ele.price,
                        details: ele.details,
                        name: ele.menuName,
                        description: ele.description
                    });
                    setIsModalOpenWithDataState(true)
                }}>
                    <MenuInfoInner>
                        <LeftMenuInfo>
                            <ul>
                                <MenuTitleWrap>
                                    {ele.isPopular &&
                                        <Popular>
                                            인기
                                        </Popular>}
                                    <Font size={"large"}>
                                        {ele.menuName}
                                    </Font>
                                </MenuTitleWrap>
                                <MenuDescriptionWrap>
                                    <Font color={"gray"}>
                                        {ele?.description}
                                    </Font>
                                </MenuDescriptionWrap>
                                <MenuPriceWrap>
                                    <Font>
                                        {ele.price.toLocaleString()}원
                                    </Font>
                                </MenuPriceWrap>
                                {ele?.isOwnerRecommend &&
                                    <RecommendWrap>
                                        <div>사장님 추천</div>
                                    </RecommendWrap>}
                                <MenuReviewWrap>
                                    <Font size="small" color={"gray"}>
                                        리뷰{ele.menuReviewCnt}
                                    </Font>
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