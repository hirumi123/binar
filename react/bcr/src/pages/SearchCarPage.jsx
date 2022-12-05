import React, { useState } from "react";
import { Link } from "react-router-dom";
import APICar from "../apis/admin/APICar";
import Filter from "../components/Filter";
import FloatModal from "../components/FloatModal";
import Footer from "../components/Footer";
import Nav2 from "../components/Nav2";
import axios from "axios";
import { useEffect } from "react";


const SearchCarPage = () => {
	const [carData, setCarData] = useState([]);
	const [fName, setFname] = useState([""]);
	const [fCategory, setFcategory] = useState([""]);
	const [fStatus, setFstatus] = useState([""]);
	const [fPrice, setFprice] = useState([""]);
  
	useEffect(() => {
	  axios
		.get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
		.then((res) => {
		  console.log(res);
		  setCarData(res.data.cars);
		})
		.catch((err) => console.log(err.message));
	}, []);
  
	const handleChangeName = (e) => {
	  setFname(e.target.value);
	};
	console.log("fname", fName);
  
	const handleFilter = (e) => {
	  axios
		.get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&isRented=${fStatus}&minPrice=${fPrice}`)
		.then((res) => {
		  console.log(res);
		  setCarData(res.data.cars);
		})
		.catch((err) => console.log(err.message));
	};
  
	const handleChangeCategory = (e) => {
	  setFcategory(e.target.value);
	};
  
	const handleChangeStatus = (e) => {
	  setFstatus(e.target.value);
	};
  
	const handleChangePrice = (e) => {
	  setFprice(e.target.value);
	};
  
	return (
	  <div>
		<Nav2/>
		<Filter
		  disable={false}
		  isButton={true}
		  handleChangeName={handleChangeName}
		  handleChangeCategory={handleChangeCategory}
		  handleChangePrice={handleChangePrice}
		  handleChangeStatus={handleChangeStatus}
		  handleFilter={handleFilter}
		  fCategory={fCategory}
		  fStatus={fStatus}
		  fPrice={fPrice}
		/>
  
		<div className="">
		  <section id="carList">
			<div className="container">
			  <div className="row align-items-center">
				{!!carData.length
				  ? carData.map((item) => (
					  <div className="col-lg-4">
						<div className="card h-100">
						  <div className="card-body">
							<img src={item.image} width={310} height={190} style={{ marginBottom: "40px", marginTop: "40px", marginLeft: "40px" }} />
							<br />
							<h6 className="small-font">{item.name}</h6>
							<h5 className="std-font">
							  <b>Rp. {item.price}/ hari</b>
							</h5>
							<h6 className="small-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
							<Link to={`/detail-car/${item.id}`}>
							  <button type="button" className="btn-sewa2" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ marginTop: "20px" }}>
								Pilih Mobil
							  </button>
							</Link>
						  </div>
						</div>
					  </div>
					))
				  : null}
			  </div>
			</div>
		  </section>
		</div>
		<Footer />
	  </div>
	);
  };

export default SearchCarPage;