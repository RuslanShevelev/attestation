import { Navigate } from "react-router-dom";
import Layout from "../../pages/layout/Layout";

 function ProtectedRoute({  redirectPath = "/", isAllowed }) {

  if (!isAllowed) {
    return  <Navigate to={redirectPath} replace />;
  }
  return  <Layout />;
}

export default ProtectedRoute