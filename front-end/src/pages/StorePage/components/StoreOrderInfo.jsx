import React from 'react';
import {OrderTabWrap, OrderTypeText} from "./StoreOrderInfoLayout";
import useTab from "../../../hooks/useTab";
import {TAB_CONTENTS} from "../../../assets/data/tabData";
import {FixedTextInterval, Font} from "../../../assets/styles/CommonStyle";

function StoreOrderInfo({deliveryInfo, takeoutInfo}) {
    const {currentItem, setCurrentItem} = useTab(0, TAB_CONTENTS.ORDER_INFO)
    return (
        <div>
            <OrderTabWrap>
                {TAB_CONTENTS.ORDER_INFO.map((content, idx) =>
                    <li key={content.key} onClick={() => setCurrentItem(idx)}>
                        <OrderTypeText $isOn={currentItem.key === content.key}>{content.tab}</OrderTypeText>
                    </li>
                )}
            </OrderTabWrap>
            <FixedTextInterval $hasPadding={true}>
                {currentItem.key === 0 &&
                    <>
                        <li>
                            <Font>{currentItem.content[0]}</Font>
                            <Font>{deliveryInfo?.minPrice.toLocaleString()}원</Font>

                        </li>
                        <li>
                            <Font>{currentItem.content[1]}</Font>
                            <Font>{deliveryInfo?.deliveryTime}</Font>

                        </li>
                        <li>
                            <Font>{currentItem.content[2]}</Font>
                            <Font>{deliveryInfo?.tip.toLocaleString()}원</Font>
                        </li>
                    </>
                }
                {currentItem.key === 1 &&
                    <>
                        <li>
                            <Font>{currentItem.content[0]}</Font>
                            <Font>{takeoutInfo?.discount.toLocaleString()}원</Font>
                        </li>
                        <li>
                            <Font>{currentItem.content[1]}</Font>
                            <Font>{deliveryInfo?.minPrice.toLocaleString()}원</Font>
                        </li>
                        <li>
                            <Font>{currentItem.content[2]}</Font>
                            <Font>{takeoutInfo?.pickUpTime}분</Font>
                        </li>
                        <li>
                            <Font>{currentItem.content[3]}</Font>
                            <Font>{takeoutInfo?.location}</Font>
                        </li>
                    </>
                }
            </FixedTextInterval>
        </div>
    );
}

export default StoreOrderInfo;