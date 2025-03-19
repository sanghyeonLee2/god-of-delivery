import React from 'react';
import * as S from "./StoreOrderInfoLayout";
import useTab from "../../../../hooks/useTab";
import {TAB_CONTENTS} from "../../../../assets/data/tabData";
import {FixedTextInterval, Font} from "../../../../assets/styles/CommonStyle";

function StoreOrderInfo({deliveryInfo, takeoutInfo, address}) {
    const {currentItem, setCurrentItem} = useTab(0, TAB_CONTENTS.ORDER_INFO)
    return (
        <div>
            <S.OrderTabWrap>
                {TAB_CONTENTS.ORDER_INFO.map((elem, idx) =>
                    <li key={elem.key} onClick={() => setCurrentItem(idx)}>
                        <S.OrderTypeText $isOn={currentItem?.key === elem.key}>{elem.tab}</S.OrderTypeText>
                    </li>
                )}
            </S.OrderTabWrap>
            <FixedTextInterval $hasPadding={true}>
                {currentItem.key === 0 &&
                    <>
                        <li>
                            <Font>{currentItem.content[0]}</Font>
                            <Font>{deliveryInfo?.minPrice.toLocaleString()}원</Font>

                        </li>
                        <li>
                            <Font>{currentItem.content[1]}</Font>
                            <Font>{deliveryInfo?.deliveryTime}분</Font>

                        </li>
                        <li>
                            <Font>{currentItem.content[2]}</Font>
                            <Font>{deliveryInfo?.tips.toLocaleString()}원</Font>
                        </li>
                    </>
                }
                {currentItem.key === 1 &&
                    <>
                        <li>
                            <Font>{currentItem.content[0]}</Font>
                            <Font>{takeoutInfo?.minPrice.toLocaleString()}원</Font>
                        </li>
                        <li>
                            <Font>{currentItem.content[1]}</Font>
                            <Font>{takeoutInfo?.pickUpTime}분</Font>
                        </li>
                        <li>
                            <Font>{currentItem.content[2]}</Font>
                            <Font>{address}</Font>
                        </li>
                    </>
                }
            </FixedTextInterval>
        </div>
    );
}

export default StoreOrderInfo;