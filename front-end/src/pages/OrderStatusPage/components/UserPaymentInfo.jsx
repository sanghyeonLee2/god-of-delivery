import React from 'react';
import {CommonSectionWrap, DividingLine, Font} from "../../../assets/styles/CommonStyle";

function UserPaymentInfo({userPaymentInfo, orderType}) {
    return (
        <div>
            <CommonSectionWrap>
                {orderType === "배달" ? <><Font>배달 주소</Font>
                    <Font size={"small"} color={"gray"}>
                        {userPaymentInfo?.userAddress}
                    </Font>
                    <Font size={"small"} color={"gray"}>
                        {userPaymentInfo?.userDetailAddress}
                    </Font>
                </> : <Font>
                    포장주문 입니다
                </Font>}
            </CommonSectionWrap>
            <DividingLine/>
            <CommonSectionWrap>
                <Font>전화번호</Font>
                <Font size={"small"} color={"gray"}>
                    {userPaymentInfo?.userContact}
                </Font>
            </CommonSectionWrap>
            <DividingLine/>
            <CommonSectionWrap>
                <Font>주문시 요청사항</Font>
                <Font size={"small"} color={"gray"}>
                    {userPaymentInfo?.userContact}
                </Font>
            </CommonSectionWrap>
            <DividingLine/>
        </div>
    );
}

export default UserPaymentInfo;