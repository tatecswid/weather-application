import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LoadingPage } from "../components/LoadingPage";

export const ProtectedRoutes = () => {
    const {user, loading} = useAuth();

    if(loading) return <LoadingPage/>;

    return user ? <Outlet/> : <Navigate to="/login"/>;
};