import React from "react";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <h3 style={{ textAlign: "center", marginTop: "20px" }}>⚠️ Please login to continue</h3>;
  }
  return children;
};

export default ProtectedRoute;
