import React from 'react';
import ModalHeader from "./MenuDetail/components/ModalHeader";
import {ModalInner, ModalOuter} from "./ModalLayout";
import MenuDetailModal from "./MenuDetail/MenuDetailModal";
import SelectMapModal from "./SelectMap/SelectMapModal";

function DefaultModal({modalType, apiUrl}) {
    return (
        <ModalOuter>
            <ModalInner>
                <ModalHeader title={modalType}/>
                {(modalType === "메뉴상세" || modalType === "메뉴수정") &&
                    <MenuDetailModal apiUrl={apiUrl} modalType={modalType}/>}
                {modalType === "주소설정" && <SelectMapModal/>}
            </ModalInner>
        </ModalOuter>
    );
}

export default DefaultModal;