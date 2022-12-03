import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";


const PrivateRoute = () => {
    if (!Auth.isAuthorization()) {
        return <Navigate to={'/login'}
    }
	return (
        <div>
            <h1>Lost Page</h1>
            <Link to="/">Looks Like You Have Lost</Link>
         </div>   

	);
};

export default NotFound;