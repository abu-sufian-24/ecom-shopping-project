import { Outlet, Navigate } from "react-router-dom";

function Privet() {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default Privet;
