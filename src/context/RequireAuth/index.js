import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function RequireAuth({ children }) {
  let auth = useAuth();
  return auth.authorization ? children : <Navigate to="/" />;
}

export function AlreadyAuth({ children }) {
  let auth = useAuth();
  return auth.authorization ? <Navigate to="/home" /> : children;
}
