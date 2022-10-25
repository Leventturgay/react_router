import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoter = () => {
  const user = true;

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoter;
