import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isModalOpenState } from "@recoil/flag/atoms";
import GlobalErrorBoundary from "@components/common/ErrorBoundary/GlobalErrorBoundary";
import ModalLayout from "@components/modal/ModalLayout";

function App() {
  const isModalOpen = useRecoilValue(isModalOpenState);
  return (
    <GlobalErrorBoundary>
      <Outlet />
      {isModalOpen.flag && (
        <ModalLayout modalType={isModalOpen.modalType} modalData={isModalOpen.modalData} />
      )}
    </GlobalErrorBoundary>
  );
}

export default App;
