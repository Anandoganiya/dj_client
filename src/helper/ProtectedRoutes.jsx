import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const user = localStorage.getItem("user") || null;
  if (!user) return <Navigate to="/login"></Navigate>;
  return <Outlet />;
};

export default ProtectedRoutes;
