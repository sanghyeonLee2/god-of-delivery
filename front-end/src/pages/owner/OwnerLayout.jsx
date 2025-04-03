import React from "react";
import { Outlet } from "react-router-dom";
import OwnerPageHeader from "@pages/owner/common/OwnerPageHeader";
import ModalLayout from "@components/modal/ModalLayout";
import { useRecoilValue } from "recoil";
import { isModalOpenState } from "@recoil/flag/atoms";
import { Main } from "@assets/styles/CommonStyle";
import Footer from "@components/common/Footer/Footer";

function OwnerLayout() {
  const isModalOpen = useRecoilValue(isModalOpenState);
  return (
    <>
      <OwnerPageHeader />
      <Main>
        <Outlet />
      </Main>
      {isModalOpen.flag && (
        <ModalLayout modalType={isModalOpen.modalType} modalData={isModalOpen.modalData} />
      )}
      <Footer />
    </>
  );
}

export default OwnerLayout;
