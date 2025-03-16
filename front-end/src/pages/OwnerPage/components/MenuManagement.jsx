import React from 'react';
import {CommonPageWrap} from "../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import {useMenu} from "../../../hooks/useMenu";
import Loading from "components/common/Loading/Loading";

function MenuManagement(props) {
    const {
        updateMenu,
        isUpdating,
        handleSubmit,
        isLoading,
        register,
        getValues,
    } = useMenu("menu-get")
    if (isLoading || isUpdating) {
        return <Loading/>;
    }
    //db 구조를 보고 만들어야할 거 같다.
    return (
        <CommonPageWrap>
            <Title text={"메뉴 정보 관리"} size={"x-large"}/>
            {/* {getValues().map((menu) =>
                <ul>
                    <li>
                        <Font>{menu.category}</Font>
                    </li>
                </ul>
            )}*/}

        </CommonPageWrap>
    );
}

export default MenuManagement;