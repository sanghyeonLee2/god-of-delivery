import React from 'react';
import {ColumnFlex, CommonBorder, CommonPageHeader, Font} from "../../../../assets/styles/CommonStyle";
import {MainBtn, SubBtn} from "components/common/Button/main/MainButton";
import {useMenuBasicInfo} from "../../../../hooks/useMenuBasicInfo";
import Input from "components/common/Input/Input";
import {useNavigate} from "react-router-dom";
import Image from "components/common/Image/Image";
import FileInput from "components/common/Input/FileInput";

function MenuInfoBox({menu}) {
    const {
        updateMenus,
        deleteMenus,
        handleSubmit,
        register,
        updateMode,
        cancelUpdateMode,
        setUpdateMode,
    } = useMenuBasicInfo()
    const navigate = useNavigate();
    return (
        <CommonBorder key={menu.menuId}>
            <form onSubmit={
                handleSubmit(() =>
                    updateMenus(menu.menuId))}>
                <CommonPageHeader>
                    <Font size={"large"}>메뉴 사진</Font>
                    {updateMode ? <FileInput register={register} name={"img"}/> :
                        <Image src={menu.imgUrl} width={130} height={130}/>
                    }
                </CommonPageHeader>
                <CommonPageHeader>
                    <Font size={"large"}>카테고리</Font>
                    {updateMode ? <Input type={"text"} register={register("category")} defaultValue={menu.category}/> :
                        <Font>{menu.category}</Font>}
                </CommonPageHeader>
                <CommonPageHeader>
                    <Font size={"large"}>메뉴 이름</Font>
                    {updateMode ? <Input type={"text"} register={register("name")} defaultValue={menu.name}/> :
                        <Font>{menu.name}</Font>}
                </CommonPageHeader>
                <CommonPageHeader>
                    <Font size={"large"}>메뉴 금액</Font>
                    {updateMode ? <Input type={"text"} register={register("price")} defaultValue={menu.price}/> :
                        <Font>{menu.price}</Font>}
                </CommonPageHeader>
                <CommonPageHeader>
                    <Font size={"large"}>메뉴 설명</Font>
                    {updateMode ?
                        <Input type={"text"} register={register("description")} defaultValue={menu.description}/> :
                        <Font>{menu.description}</Font>}
                </CommonPageHeader>
                <CommonPageHeader>
                    <Font>찜 수</Font>
                    <Font>{menu.menuReviewCnt}</Font>
                </CommonPageHeader>
                <ColumnFlex $height={"130px"}>
                    {updateMode ?
                        <SubBtn text={"완료"} type={"submit"}/>
                        :
                        <SubBtn text={"메뉴 기본 정보 수정"} type={"button"} onClick={setUpdateMode}/>
                    }
                    {updateMode ?
                        <MainBtn text={"취소"} type={"button"} onClick={cancelUpdateMode}/>
                        :
                        <MainBtn text={"메뉴 옵션 정보 수정"} type={"button"}
                                 onClick={() => navigate(`/owners/me/menus/${menu.menuId}/options`)}/>
                    }
                    <MainBtn text={"메뉴 삭제"} type={"button"} onClick={() => deleteMenus(menu.menuId)}/>
                </ColumnFlex>
            </form>
        </CommonBorder>
    );
}

export default MenuInfoBox;