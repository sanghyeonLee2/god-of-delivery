import React from 'react';
import {CommonPageWrap} from "../../../assets/styles/CommonStyle";
import Title from "components/common/Title/Title";
import {Link} from "react-router-dom";

function OwnerHomePage(props) {
    return (
        <CommonPageWrap>
            <Title text={"사장님 페이지"} size={"x-large"}/>
            <ul>
                <li>
                    <Link to={"store"}>가게 정보 관리</Link>
                </li>
                <li>
                    <Link to={"menus"}>메뉴 정보 관리</Link>
                </li>
                <li>
                    <Link to={"reviews"}>가게 리뷰 관리</Link>
                </li>
            </ul>
        </CommonPageWrap>
    );
}

export default OwnerHomePage;