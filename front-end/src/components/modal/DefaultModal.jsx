import React from 'react';
import ModalHeader from "./MenuDetail/components/ModalHeader";
import {ModalInner, ModalOuter} from "./ModalLayout";
import MenuDetailModal from "./MenuDetail/MenuDetailModal";
import SelectMapModal from "./SelectMap/SelectMapModal";

function DefaultModal({modalType, modalIdData}) {
    return (
        <ModalOuter>
            <ModalInner>
                <ModalHeader title={modalType}/>
                {(modalType === "menuDetail" || modalType === "updateCartMenu") &&
                    <MenuDetailModal menuId={modalIdData} modalType={modalType}/>}
                {modalType === "selectAddress" && <SelectMapModal/>}
            </ModalInner>
        </ModalOuter>
    );
}

export default DefaultModal;