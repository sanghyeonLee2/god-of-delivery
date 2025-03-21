import React from 'react';
import {FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import {MenuDetailOptionsWrap, OptionWrap} from "./ModalComponentsLayout";
import {MenuDetailTextWrap} from "../MenuDetailModalLayout";
import Radio from "../../../common/RadioGroup/Radio/Radio";
import RadioGroup from "../../../common/RadioGroup/RadioGroup";
import CheckBox from "../../../common/CheckBox/CheckBox";

function MenuDetailOptions({menuCategories, getValues, setValue}) {
    const setRadioMenuOptions = (menuOptionId, menuOptions) => {
        const radioOptionIds = menuOptions.map(cur => cur.menuOptionId);
        setValue("options", [...getValues("options").filter((e) => !radioOptionIds.includes(e)), menuOptionId]);
    }

    const setCheckboxMenuOptions = (e, menuOptionId, maxQuantity, menuOptions) => {
        const checkboxOptionIds = menuOptions.map(cur => cur.menuOptionId);
        const checkedCnt = checkboxOptionIds.filter(id => getValues("options").includes(id)).length;
        const isChecked = e.target.checked;
        if (isChecked && checkedCnt >= maxQuantity) {
            e.target.checked = false
            return
        }
        if (isChecked) {
            return setValue("options", [...getValues("options"), menuOptionId]);
        } else {
            return setValue("options", getValues("options").filter((id) => id !== menuOptionId));
        }
    }

    return (
        <>
            {menuCategories.map((category) =>
                <MenuDetailOptionsWrap key={category.menuCategoryId}>
                    <MenuDetailTextWrap>
                        <FlexOnly>
                            <Font>{category.title}</Font>
                            &nbsp;&nbsp;
                            {category?.isEssential ?
                                <Font size={"small"} color={"red"}>{category?.maxQuantity}개 필수 선택</Font> :
                                <Font size={"small"}>최대{category?.maxQuantity}개 선택가능</Font>}
                        </FlexOnly>
                    </MenuDetailTextWrap>
                    {category?.isEssential && category?.maxQuantity === 1 ?
                        <RadioGroup>
                            {category.MenuOptions.map((option, idx) =>
                                <OptionWrap key={option.menuOptionId}>
                                    <Radio
                                        value={option.content}
                                        defaultChecked={idx === 0}// Radio의 고유 값
                                        name={category?.menuCategoryId} // 같은 그룹으로 묶음
                                        onChange={() => setRadioMenuOptions(option.menuOptionId, category.MenuOptions)} // 단일 객체 전달
                                    >
                                        &nbsp;&nbsp;{option.content}
                                    </Radio>
                                    <Font>
                                        +{option.price.toLocaleString()}원
                                    </Font>
                                </OptionWrap>
                            )}
                        </RadioGroup> :
                        category.MenuOptions?.map((option) => (
                            <OptionWrap key={option.menuOptionId}>
                                <CheckBox
                                    value={option.menuOptionId}
                                    /*checked={value.some((item) => item.menuOptionId === option.menuOptionId)}*/
                                    onChange={(e) => setCheckboxMenuOptions(e, option.menuOptionId, category.maxQuantity, category.MenuOptions)}
                                >
                                    &nbsp;&nbsp;{option.content}
                                </CheckBox>
                                <Font>
                                    +{option.price.toLocaleString()}원
                                </Font>
                            </OptionWrap>
                        ))
                    }
                </MenuDetailOptionsWrap>)
            }
        </>
    )
}

export default MenuDetailOptions;