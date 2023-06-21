import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({isUserLoggedIn, children}) => {
  return;

  if (isUserLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
