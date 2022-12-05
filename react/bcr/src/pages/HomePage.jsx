import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Nav from "../components/Nav"
import OurServices from "../components/OurServices";
import Sewa from "../components/Sewa";
import Testi from "../components/Testi";

import WhyUs from "../components/WhyUs";
import Auth from "../utils/Auth";

const HomePage = () => {
	const navigate = useNavigate();

	return (
        
		<div>
			<Nav/>
			<OurServices/>
			<WhyUs/>
			<Testi/>
			<Sewa/>
			<FAQ/>
			<Footer/>
			<Modal/>
			{/* 	
			{Auth.isAuthorization() && (
			<button onClick={() => Auth.logout(navigate)}>Logout</button>
			)}

            <div className="container">
                <h1>HomePage</h1>
			<Link to="/search-car">Go To Halaman Cari Mobil</Link>
			<br />
			<Link to="/login">Go to Login Page</Link>
            <img src="./assets/check.png" alt="" />
			</div>
			 */}
			



            
			
		</div>
        
	);
};

export default HomePage;