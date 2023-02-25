import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PathAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user?.employeeID ? (
    <Outlet />
  ) : auth?.token ? (
    <Navigate to="/Unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/Register" state={{ from: location }} replace />
  );
};

export default PathAuth;
