import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
        <div class="container py-4"> 
            {Auth.isAuthorization() && (
                <button onClick=() => Auth.Logout()}>}
            <h1>HomePage</h1>
            <Link to="/login">Go to login page</Link>
            
            
        </div>
	);
};

export default HomePage;