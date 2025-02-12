import React from 'react';
import {InfoBox, MenuInfoWrap, MenuPicture} from "./StoreMenuLayout";
import {DividingLine, Font, VerticalSpace} from "../../../assets/styles/CommonStyle";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import Title from "../../../components/common/Title/Title";
import {TabWrap} from "../StorePageLayout";

function StoreMenu({notice, menuInfo}) {
    const setIsModalOpen = useSetRecoilState(isModalOpenState);
    return (
        <TabWrap style={{paddingTop: "10px"}}>
            <InfoBox>
                <Font>{notice}</Font>
            </InfoBox>
            <ul>
                {menuInfo.map((menuInfoItem) =>
                    <li key={menuInfoItem.category}>
                        <Title size={"x-large"} text={menuInfoItem.category}/>
                        {menuInfoItem.menus?.map((menu) =>
                            <div key={menu.menuId} onClick={() => {
                                setIsModalOpen({
                                    modalType: "메뉴상세",
                                    modalFlag: true,
                                    modalIdData: menu?.menuId
                                })
                            }}>
                                <MenuInfoWrap>
                                    <div>
                                        <Font size={"large"}>
                                            {menu?.menuName}
                                        </Font>
                                        <Font color={"gray"}>
                                            {menu?.description}
                                        </Font>
                                        <Font>
                                            {menu?.price.toLocaleString()}원
                                        </Font>
                                    </div>
                                    <MenuPicture/>
                                </MenuInfoWrap>
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