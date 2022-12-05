import React from "react";
import { Link, useNavigate } from "react-router-dom";
import APIAuth from "../apis/admin/APIAuth";




const LoginPage = () => {
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const password = formData.get("password");
		try {
			await APIAuth.login({ email, password });
			navigate("/");
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	return (
		<div>
			<section>
				<form onSubmit={handleLogin}>

					<div className="container-login100">
						<div className="wrap-login100">
						<form onSubmit={handleLogin} className="login100-form">
							<p>Email</p>
							<input type="email" name="email" id="email" placeholder="email" />
							<p>Password</p>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="password"
							/>
							<button type="submit" className="btn1">Sign In</button>
	
						</form>
							<div className="login100-more" style={{backgroundImage: 'url("./assets/bglogin.png")'}}>
							</div>
						</div>
					</div>

				</form>
			</section>
				
			<h1>BCR - Binar Car Rental</h1>
			<form onSubmit={handleLogin}>
						<p>Email</p>
						<input type="email" name="email" id="email" placeholder="email" />
						<p>Password</p>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="password"
						/>
						<button type="submit" className="btn1">Sign In</button>
				</form>

			<Link to="/">back to home</Link>
		</div>
	);
};

export default LoginPage;