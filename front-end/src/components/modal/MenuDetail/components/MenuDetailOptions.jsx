import React from 'react';
import {FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import {MenuDetailOptionsWrap, OptionWrap} from "./ModalComponentsLayout";
import {MenuDetailTextWrap} from "../MenuDetailModalLayout";
import {Controller} from "react-hook-form";
import Radio from "../../../common/RadioGroup/Radio/Radio";
import RadioGroup from "../../../common/RadioGroup/RadioGroup";
import CheckBox from "../../../common/CheckBox/CheckBox";

function MenuDetailOptions({details, control}) {
    return (
        <>
            {details.map((detail) =>
                <MenuDetailOptionsWrap key={detail.menuCategoryId}>
                    <MenuDetailTextWrap>
                        <FlexOnly>
                            <Font>{detail.title}</Font>
                            &nbsp;&nbsp;
                            {detail?.isEssential ?
                                <Font size={"small"} color={"red"}>{detail?.maxQuantity}개 필수 선택</Font> :
                                <Font size={"small"}>최대{detail?.maxQuantity}개 선택가능</Font>}
                        </FlexOnly>
                    </MenuDetailTextWrap>
                    {detail?.isEssential && detail?.maxQuantity === 1 ?
                        <RadioGroup>
                            <Controller control={control} name={detail.title}
                                        defaultValue={detail.menuOptions.filter(option => option.isChecked)}
                                        render={({field: {onChange, value}}) => (
                                            detail.menuOptions.map((option) =>
                                                <OptionWrap key={option.menuOptionId}>
                                                    <Radio
                                                        value={option.content} // Radio의 고유 값
                                                        checked={value[0]?.menuOptionId === option?.menuOptionId} // 객체 비교
                                                        name={detail.title} // 같은 그룹으로 묶음
                                                        onChange={() => onChange([option])} // 단일 객체 전달
                                                    >
                                                        &nbsp;&nbsp;{option.content}
                                                    </Radio>
                                                    <Font>
                                                        +{option.price.toLocaleString()}원
                                                    </Font>
                                                </OptionWrap>
                                            ))}/>
                        </RadioGroup> :
                        <Controller control={control} name={detail.title}
                                    defaultValue={detail.menuOptions.filter(option => option.isChecked) || []}// 모두 false인 경우 기본값 제거}
                                    render={(({field: {onChange, value}}) => (
                                        detail.menuOptions.map((option) =>
                                            <OptionWrap key={option.menuOptionId}>
                                                <CheckBox
                                                    value={option}
                                                    onChange={(e) => {
                                                        const isChecked = e.target.checked;
                                                        if (isChecked && value.length >= detail.maxQuantity) {
                                                            e.target.checked = false
                                                            return
                                                        }
                                                        if (isChecked) {
                                                            return onChange([...value, option])
                                                        }
                                                        return onChange(value.filter((item) => item.menuOptionId !== option.menuOptionId))
                                                    }}>
                                                    &nbsp;&nbsp;{option.content}
                                                </CheckBox>
                                                <Font>
                                                    +{option.price.toLocaleString()}원
                                                </Font>
                                            </OptionWrap>
                                        )
                                    ))}/>
                    }
                </MenuDetailOptionsWrap>)
            }
        </>
    )
}

export default MenuDetailOptions;