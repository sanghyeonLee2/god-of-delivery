import React from 'react';
import {FlexOnly, Font, SelectTwoTypes} from "../../../assets/styles/CommonStyle";
import RadioGroup from "../../../components/common/RadioGroup/RadioGroup";
import Radio from "../../../components/common/RadioGroup/Radio/Radio";
import {Controller} from "react-hook-form";

function CartReceiptMethod({receiptMethods, getValues, control}) {
    return (
        <>
            <Font size={"large"}>수령방법을 선택해주세요</Font>
            <Controller control={control} name={"receiptMethod"} defaultValue={receiptMethods[0]}
                        render={({field: {onChange, value}}) => (
                            <RadioGroup isOtherCheckStyle={true}>
                                {receiptMethods.map((receiptMethod) =>
                                    <Radio value={receiptMethod} key={receiptMethod.receiptMethodType}
                                           onChange={() => onChange(receiptMethod)}
                                           checked={value.receiptMethodType === receiptMethod.receiptMethodType}>
                                        <SelectTwoTypes
                                            isChecked={receiptMethod.receiptMethodType === getValues("receiptMethod.receiptMethodType")}>
                                            <FlexOnly>
                                                <Font>
                                                    {receiptMethod.receiptMethodType}
                                                </Font>
                                                &nbsp;
                                                <Font size={"small"} color={"gray"}>{receiptMethod.waiting}</Font>
                                            </FlexOnly>
                                            <Font>
                                                {receiptMethod.tip.toLocaleString()}원
                                            </Font>
                                        </SelectTwoTypes>
                                    </Radio>
                                )}
                            </RadioGroup>
                        )
                        }/>
        </>
    );
}

export default CartReceiptMethod;