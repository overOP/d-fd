import { Navigate, Outlet } from "react-router";

/**
 * Gates every private page.
 * If there’s no JWT in localStorage we bounce to /signup.
 */
const ProtectedRoute = () => {
  const token = localStorage.getItem("accessToken");
  return token ? <Outlet /> : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;
