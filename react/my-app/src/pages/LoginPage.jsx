import React from 'react';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


const LoginPage = () => {
    const handleLogin = () => {
        Cookies.set ("accessToken", "abcd1234")
    }
	return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => handleLogin()}>Login</button>
            <br></br>
            <Link to="/">Homepage</Link>
         </div>   

	);
};

export default LoginPage;