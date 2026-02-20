import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LoadingPage } from "../components/intermediate pages/LoadingPage";

export const PublicRoute = () => {
    const {user, loading} = useAuth();

    if(loading) return <LoadingPage/>;

    return !user ? <Outlet/> : <Navigate to="/"/>;
};