// CentralProtected.js
import React from "react";
import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";

const CentralProtected = ({ element: Element, ...rest }) => {
  const token = Cookie.get("Central_jwt_token");
  console.log(token);
  return token ? <Element {...rest} /> : <Navigate to="/login" replace />;
};

export default CentralProtected;
