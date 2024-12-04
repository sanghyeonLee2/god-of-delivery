import React from 'react';
import {FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import RadioGroup from "../../../common/RadioGroup/RadioGroup";
import Radio from "../../../common/RadioGroup/Radio/Radio";
import {MenuDetailOptionsWrap, OptionWrap} from "./ModalComponentsLayout";
import {MenuDetailTextWrap} from "../MenuDetailModalLayout";
import CheckBox from "../../../common/CheckBox/CheckBox";

function MenuDetailOptions({details, register, setValue, getValues}) {
    return (
        <>
            {details.map((detail) =>
                <MenuDetailOptionsWrap key={detail.title}>
                    <MenuDetailTextWrap>
                        <FlexOnly>
                            <Font>{detail.title}</Font>
                            &nbsp;&nbsp;
                            {detail?.isEssential ? <Font size={"small"} color={"red"}>필수 선택</Font> :
                                <Font size={"small"}>최대{detail?.maxQuantity}개 선택가능</Font>}
                        </FlexOnly>
                    </MenuDetailTextWrap>
                    {detail.isEssential ?
                        <RadioGroup>
                            {/*라디오가 아닌 체크박스를 만들어야한다 -> 커스텀 훅으로?*/}
                            {detail.options.map((option, optionIdx) =>
                                <OptionWrap key={option.content}>
                                    <Radio value={option}
                                           name={detail.title}
                                           setValue={setValue}
                                           defaultChecked={optionIdx === 0}>
                                        &nbsp;&nbsp;{option.content}
                                    </Radio>
                                    <Font>
                                        +{option.price.toLocaleString()}원
                                    </Font>
                                </OptionWrap>
                            )}
                        </RadioGroup> :
                        <>
                            {detail.options.map((option) =>
                                <OptionWrap key={option.content}>
                                    <CheckBox setValue={setValue}
                                              value={option}
                                              name={detail.title}
                                              register={register}
                                              getValues={getValues}
                                              maxQuantity={detail.maxQuantity}>
                                        &nbsp;&nbsp;{option.content}
                                    </CheckBox>
                                    <Font>
                                        +{option.price.toLocaleString()}원
                                    </Font>
                                </OptionWrap>
                            )
                            }
                        </>
                    }
                </MenuDetailOptionsWrap>)
            }
        </>
    )
}

export default MenuDetailOptions;