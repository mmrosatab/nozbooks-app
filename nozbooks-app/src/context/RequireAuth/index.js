import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function RequireAuth({ children }) {
  let auth = useAuth();
  console.log(auth);
  return auth.authorization && auth.refreshToken ? (
    children
  ) : (
    <Navigate to="/" />
  );
}

export function AlreadyAuth({ children }) {
  let auth = useAuth();
  return auth.authorization && auth.refreshToken ? (
    <Navigate to="/home" />
  ) : (
    children
  );
}
