import React from 'react';
import {CommonSectionWrap, DividingLine, Font} from "../../../assets/styles/CommonStyle";

function UserPaymentInfo({userPaymentInfo}) {
    return (
        <div>
            <CommonSectionWrap>
                {userPaymentInfo?.orderType === "Delivery" ? <><Font>배달 주소</Font>
                    <Font size={"small"} color={"gray"}>
                        {userPaymentInfo?.addressSnapshot}
                    </Font>
                    <Font size={"small"} color={"gray"}>
                        {userPaymentInfo?.detailAddressSnapshot}
                    </Font>
                </> : <Font>
                    포장주문 입니다
                </Font>}
            </CommonSectionWrap>
            <DividingLine/>
            <CommonSectionWrap>
                <Font>전화번호</Font>
                <Font size={"small"} color={"gray"}>
                    {userPaymentInfo?.contact}
                </Font>
            </CommonSectionWrap>
            <DividingLine/>
            <CommonSectionWrap>
                <Font>주문시 요청사항</Font>
                <Font size={"small"} color={"gray"}>
                    {userPaymentInfo?.requests}
                </Font>
            </CommonSectionWrap>
            <DividingLine/>
        </div>
    );
}

export default UserPaymentInfo;