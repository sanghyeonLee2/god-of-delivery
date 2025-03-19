import React from 'react';
import {Controller} from "react-hook-form";
import RadioGroup from "components/common/RadioGroup/RadioGroup";
import Radio from "components/common/RadioGroup/Radio/Radio";
import {Font, SelectTwoTypes} from "../../../../assets/styles/CommonStyle";
import {useSetRecoilState} from "recoil";
import {paymentTipState} from "../../../../recoil/order/atom";

function PaymentMethods({control, toSelectMethods, tips}) {
    const setPaymentTip = useSetRecoilState(paymentTipState)
    const tipOnchange = (e, onChange, method) => {
        if (e.target.value === "delivery") {
            setPaymentTip(tips)
        }
        if (e.target.value === "takeOut") {
            setPaymentTip(0)
        }
        onChange(method)
    }
    return (
        <div>
            <Font size={"large"}>{toSelectMethods.methodsName === "paymentMethod" ? "결제수단" : "주문방법"}</Font>
            <Controller control={control} name={toSelectMethods.methodsName}
                        defaultValue={toSelectMethods.methods[0].method}
                        render={({field: {onChange, value}}) => (
                            <RadioGroup isOtherCheckStyle={true}>
                                {toSelectMethods.methods.map((toSelectMethod) =>
                                    <Radio value={toSelectMethod.method} key={toSelectMethod.method}
                                           onChange={(e) => tipOnchange(e, onChange, toSelectMethod.method)}
                                           name={toSelectMethods.methodsName}
                                           checked={value === toSelectMethod.method}>
                                        <SelectTwoTypes
                                            $isChecked={toSelectMethod.method === value}>
                                            <Font>
                                                {toSelectMethod.content}
                                            </Font>
                                        </SelectTwoTypes>
                                    </Radio>
                                )}
                            </RadioGroup>
                        )
                        }/>
        </div>);

}

export default PaymentMethods;