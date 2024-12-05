import React from 'react';
import {InfoBox, MenuWrap} from "./StoreMenuLayout";
import MenuBox from "../../../components/common/MenuBox/MenuBox";
import {Font} from "../../../assets/styles/CommonStyle";

function StoreMenu({notice, menuInfo}) {
    return (
        <div>
            <InfoBox>
                <Font>{notice}🚨잘못된주소, 없는번호 등 고객의부주의로 재배달시 배달료가 부가되니 주문전 최종확인 부탁드립니다.
                    🚨피자쏠림, 음식누락, 오배송 등 배달에 문제가 생길시 즉시 매장으로 전화주셔야 빠르게 처리 도와드릴수 있습니다.</Font>
            </InfoBox>
            <MenuWrap> {/*컴포넌트로 만들고 재사용*/}
                {menuInfo.map((ele) =>
                    <MenuBox key={ele.menuTitle} menuInfo={ele}/>
                )}
            </MenuWrap>
        </div>
    );
}

export default StoreMenu;