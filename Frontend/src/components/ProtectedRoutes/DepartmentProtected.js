// DepartmentProtected.js
import React from "react";
import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";

const DepartmentProtected = ({ element: Element, ...rest }) => {
  const token = Cookie.get("Department_jwt_token");
  return token ? <Element {...rest} /> : <Navigate to="/login" replace />;
};

export default DepartmentProtected;
