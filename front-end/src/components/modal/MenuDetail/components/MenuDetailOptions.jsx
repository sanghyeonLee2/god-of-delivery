import React from 'react';
import {FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import {MenuDetailOptionsWrap, OptionWrap} from "./ModalComponentsLayout";
import {MenuDetailTextWrap} from "../MenuDetailModalLayout";
import CheckBox from "../../../common/CheckBox/CheckBox";
import {Controller} from "react-hook-form";

function MenuDetailOptions({details, control}) {
    console.log(details)
    return (
        <>
            {details.map((detail) =>
                <MenuDetailOptionsWrap key={detail.title}>
                    <MenuDetailTextWrap>
                        <FlexOnly>
                            <Font>{detail.title}</Font>
                            &nbsp;&nbsp;
                            {detail?.isEssential ?
                                <Font size={"small"} color={"red"}>{detail?.maxQuantity}개 필수 선택</Font> :
                                <Font size={"small"}>최대{detail?.maxQuantity}개 선택가능</Font>}
                        </FlexOnly>
                    </MenuDetailTextWrap>
                    {
                        <>
                            <Controller control={control} name={detail.title}
                                        defaultValue={detail.options.filter(option => option.isChecked)}
                                        render={(({field: {onChange, value}}) => (
                                            detail.options.map((option) =>
                                                <OptionWrap key={option.content}>

                                                    <CheckBox
                                                        value={option}
                                                        onChange={(e) => {
                                                            const isChecked = e.target.checked;
                                                            /*if (isChecked && value.length >= detail.maxQuantity) {
                                                                e.target.checked = false
                                                                return
                                                            }*/
                                                            if (isChecked) {
                                                                return onChange([...value, option])
                                                            }
                                                            return onChange(value.filter((item) => item.content !== option.content))
                                                        }}>
                                                        &nbsp;&nbsp;{option.content}
                                                    </CheckBox>
                                                    <Font>
                                                        +{option.price.toLocaleString()}원
                                                    </Font>
                                                </OptionWrap>
                                            )
                                        ))}/>

                        </>
                    }
                </MenuDetailOptionsWrap>)
            }
        </>
    )
}

export default MenuDetailOptions;