import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import useAuth from "@hooks/useAuth";
import Loading from "@components/common/Loading/Loading";

const RequireRole = ({ allowedRole }) => {
  const { isLoading, role, isAuthorized } = useAuth();

  if (isLoading) {
    return <Loading />;
  }
  if (!isAuthorized) {
    return <Navigate to="/auth/sign-in" replace />;
  }
  if (role === allowedRole) {
    return <Outlet />;
  }
  const redirectPath = role === "user" ? "/" : "/owners/me";

  return <Navigate to={redirectPath} replace />;
};

export default RequireRole;
