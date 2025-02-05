import React from 'react';
import {Controller} from "react-hook-form";
import RadioGroup from "../../../components/common/RadioGroup/RadioGroup";
import Radio from "../../../components/common/RadioGroup/Radio/Radio";
import {Font, SelectTwoTypes} from "../../../assets/styles/CommonStyle";

const paymentMethods = [
    {content: "만나서 카드 결제", method: "card"},
    {content: "만나서 현금 결제", method: "cash"},
]

function PaymentMethods({control, getValues}) {
    return (
        <div>
            <Font size={"large"}>결제 수단</Font>
            <Controller control={control} name={"paymentMethod"} defaultValue={"card"}
                        render={({field: {onChange, value}}) => (
                            <RadioGroup isOtherCheckStyle={true}>
                                {paymentMethods.map((paymentMethod) =>
                                    <Radio value={paymentMethod.method} key={paymentMethod.method}
                                           onChange={() => onChange(paymentMethod.method)}
                                           name={"paymentMethod"}
                                           checked={value === paymentMethod.method}>
                                        <SelectTwoTypes isChecked={paymentMethod.method === getValues("paymentMethod")}>
                                            <Font>
                                                {paymentMethod.content}
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