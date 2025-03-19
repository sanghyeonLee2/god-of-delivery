import React from 'react';
import {ColumnFlex, CommonBorder, FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import Input from "components/common/Input/Input";
import MenuOptions from "pages/owner/MenuManagementPage/components/MenuOptions";
import {MainBtn, SubBtn} from "components/common/Button/main/MainButton";
import Select from "components/common/Select/Select";
import Option from "components/common/Select/options/Option";
import {useMenuCategory} from "../../../../hooks/useMenuCategory";

function MenuCategoryBox({menuCategory}) {
    const {
        updateMenuCategory,
        deleteMenuCategory,
        register,
        updateMode,
        cancelCategoryUpdateMode,
        setCategoryUpdateMode,
    } = useMenuCategory()

    return (
        <CommonBorder key={menuCategory.menuCategoryId}>
            <form onSubmit={updateMenuCategory}>
                <FlexOnly justify={"space-between"}>
                    <Font>카테고리 이름</Font>
                    {updateMode ?
                        <Input type={"text"} register={register("title")} defaultValue={menuCategory.title}/> :
                        <Font>{menuCategory.title}</Font>}
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font>필수 여부</Font>
                    {updateMode ?
                        <Select {...register("menuCategory")}>
                            <Option value={true} text={"필수"}/>
                            <Option value={false} text={"선택"}/>
                        </Select> :
                        <Font>{menuCategory.isEssential ? "필수" : "선택"}</Font>}
                </FlexOnly>
                <FlexOnly justify={"space-between"}>
                    <Font>최대 선택 수</Font>
                    {updateMode ?
                        <Input type={"number"} register={register("maxQuantity")}
                               defaultValue={menuCategory.maxQuantity}/>
                        : <Font>{menuCategory.maxQuantity}</Font>}
                </FlexOnly>
                <ColumnFlex $height={updateMode ? "130px" : "85px"}>
                    {updateMode ?
                        <>
                            < SubBtn text={"완료"} type={"submit"}/>
                            < MainBtn text={"취소"} type={"button"} onClick={cancelCategoryUpdateMode}/>
                        </>
                        :
                        < SubBtn text={"카테고리 수정"} type={"button"} onClick={setCategoryUpdateMode}/>
                    }
                    <MainBtn text={"카테고리 삭제"} type={"button"} onClick={deleteMenuCategory}/>
                </ColumnFlex>
                <MenuOptions menuOptions={menuCategory.menuOptions} menuId={menuCategory.menuId}/>
            </form>
        </CommonBorder>
    );
}

export default MenuCategoryBox;