import React from "react";
import { Outlet } from "react-router-dom";
import { UserHeader } from "@pages/user/common/Header/UserHeader";
import { Main } from "@assets/styles/CommonStyle";
import Footer from "@components/common/Footer/Footer";

function UserLayout() {
  return (
    <>
      <UserHeader />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default UserLayout;
