import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@components/common/Footer/Footer";
import { Main } from "@assets/styles/CommonStyle";
import AuthPageHeader from "@pages/common/AuthPage/components/AuthPageHeader";

function AuthPageLayout() {
  return (
    <>
      <AuthPageHeader />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default AuthPageLayout;
