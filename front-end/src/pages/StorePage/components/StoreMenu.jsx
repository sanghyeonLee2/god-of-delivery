import React from 'react';
import * as S from "./StoreMenuLayout";
import {DividingLine, Font, VerticalSpace} from "../../../assets/styles/CommonStyle";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import Title from "../../../components/common/Title/Title";
import {TabWrap} from "../StorePageLayout";
import {API_URLS} from "../../../constants/urls";
import Image from "components/common/Image/Image";

function StoreMenu({notice, menuInfo}) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    return (
        <TabWrap style={{paddingTop: "10px"}}>
            <S.InfoBox>
                <Font>{notice}</Font>
            </S.InfoBox>
            <ul>
                {menuInfo?.map((menuInfoItem) =>
                    <li key={menuInfoItem.title}>
                        <Title size={"x-large"} text={menuInfoItem.title}/>
                        {menuInfoItem.menus?.map((menu) =>
                            <div key={menu.menuId} onClick={() => {
                                setIsModalOpen({
                                        modalType: "메뉴상세",
                                        flag: true,
                                        modalData: {api: API_URLS.GET_MENUS(menu?.menuId)}
                                    }
                                )
                            }}>
                                <S.MenuInfoWrap>
                                    <div>
                                        <Font size={"large"}>
                                            {menu?.name}
                                        </Font>
                                        <Font color={"gray"}>
                                            {menu?.description}
                                        </Font>
                                        <Font>
                                            {menu?.price.toLocaleString()}원
                                        </Font>
                                    </div>
                                    <Image src={menu?.imgUrl} width={140} height={140}/>
                                </S.MenuInfoWrap>
                                <DividingLine/>
                            </div>
                        )}
                        <VerticalSpace/>
                    </li>
                )}
            </ul>
        </TabWrap>
    );
}

export default StoreMenu;