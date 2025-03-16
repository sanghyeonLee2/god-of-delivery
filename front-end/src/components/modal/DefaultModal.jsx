import React from 'react';
import ModalHeader from "./MenuDetail/components/ModalHeader";
import {ModalInner, ModalOuter} from "./ModalLayout";
import MenuDetailModal from "./MenuDetail/MenuDetailModal";
import SelectMapModal from "./SelectMap/SelectMapModal";
import CreateReview from "components/modal/CreateReview/CreateReview";
import CreateOwnerReview from "components/modal/CreateOwnerReview/CreateOwnerReview";

function DefaultModal({modalType, modalData}) {
    return (
        <ModalOuter>
            <ModalInner>
                <ModalHeader title={modalType}/>
                {(modalType === "메뉴상세" || modalType === "메뉴수정") &&
                    <MenuDetailModal api={modalData.api} modalType={modalType}/>}
                {modalType === "주소설정" && <SelectMapModal/>}
                {modalType === "리뷰작성" && <CreateReview modalData={modalData}/>}
                {modalType === "사장님 리뷰작성" && <CreateOwnerReview modalData={modalData}/>}
            </ModalInner>
        </ModalOuter>
    );
}

export default DefaultModal;