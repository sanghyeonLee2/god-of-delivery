import React from "react";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { Header } from "components/common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import { useRecoilValue } from "recoil";
import { isModalOpenState } from "./recoil/flag/atoms";
import DefaultModal from "./components/modal/DefaultModal";
import GlobalErrorBoundary from "components/common/ErrorBoundary/GlobalErrorBoundary";

function App() {
  const isModalOpen = useRecoilValue(isModalOpenState);
  return (
    <GlobalErrorBoundary>
      <div className="App">
        <Header />
        <GlobalStyle />
        <Outlet />
      </div>
      <Footer />
      {isModalOpen.flag && (
        <DefaultModal
          modalType={isModalOpen.modalType}
          modalData={isModalOpen.modalData}
        />
      )}
    </GlobalErrorBoundary>
  );
}

export default App;
