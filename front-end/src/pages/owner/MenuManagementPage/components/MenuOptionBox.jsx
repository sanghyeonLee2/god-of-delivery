import React from 'react';
import {ColumnFlex, FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import {useMenuOption} from "../../../../hooks/useMenuOption";
import {MainBtn} from "components/common/Button/main/MainButton";
import Input from "components/common/Input/Input";

function MenuOptionBox({option, menuId}) {
    const {
        updateMenuOption,
        deleteMenuOption,
        register,
        updateMode,
        cancelOptionUpdateMode,
        setOptionUpdateMode
    } = useMenuOption(menuId, option.menuOptionId)

    return (
        <div>
            <FlexOnly justify={"space-between"}>
                <Font>옵션 번호</Font>
                <Font>{option.menuOptionId}</Font>
            </FlexOnly>
            <FlexOnly justify={"space-between"}>
                <Font>옵션 이름</Font>
                {updateMode ? <Input type={"text"} defaultValue={option.content} register={register("content")}/> :
                    <Font>{option.content}</Font>}
            </FlexOnly>
            <FlexOnly justify={"space-between"}>
                <Font>옵션 가격</Font>
                {updateMode ? <Input type={"text"} defaultValue={option.price} register={register("price")}/> :
                    <Font>{option.price.toLocaleString()}원</Font>}
            </FlexOnly>
            <ColumnFlex $height={updateMode ? "130px" : "85px"}>
                {updateMode ? <MainBtn text={"완료"} type={"button"} onClick={updateMenuOption}/> :
                    <MainBtn text={"옵션 수정"} type={"button"} onClick={setOptionUpdateMode}/>}
                {updateMode && <MainBtn text={"취소"} type={"button"} onClick={cancelOptionUpdateMode}/>}
                <MainBtn text={"옵션 삭제"} type={"button"} onClick={deleteMenuOption}/>
            </ColumnFlex>
        </div>
    );
}

export default MenuOptionBox;