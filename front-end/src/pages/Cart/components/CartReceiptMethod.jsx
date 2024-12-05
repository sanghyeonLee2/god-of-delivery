import React from 'react';
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import {MethodReceiptBox} from "./CartReceiptMethodLayout";

function CartReceiptMethod(props) {
    return (
        <>
            <Font size={"large"}>수령방법을 선택해주세요</Font>
            <ul>
                <MethodReceiptBox>
                    <FlexOnly>
                        <Font>
                            배달
                        </Font>
                        &nbsp;
                        <Font size={"small"} color={"gray"}>10분~20분</Font>
                    </FlexOnly>
                    <Font>
                        2000원
                    </Font>
                </MethodReceiptBox>
                <MethodReceiptBox>
                    <FlexOnly>
                        <Font>
                            포장
                        </Font>
                        &nbsp;
                        <Font size={"small"} color={"gray"}>10분~20분</Font>
                    </FlexOnly>
                    <Font>
                        2000원
                    </Font>
                </MethodReceiptBox>
            </ul>
        </>
    );
}

export default CartReceiptMethod;