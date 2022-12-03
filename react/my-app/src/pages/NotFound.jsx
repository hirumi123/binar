import React from 'react';
import { Link } from "react-router-dom";


const NotFound = () => {
	return (
        <div>
            <h1>Lost Page</h1>
            <Link to="/">Looks Like You Have Lost</Link>
         </div>   

	);
};

export default NotFound;