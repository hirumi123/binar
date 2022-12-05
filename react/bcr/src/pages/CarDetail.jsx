import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import APICar from "../apis/admin/APICar";
import Footer from "../components/Footer";
import Nav3 from "../components/Nav3";
import { useEffect } from "react";
import Filter from "../components/Filter";
import axios from "axios";
import Nav2 from "../components/Nav2";

const CarDetail = () => {
	const { id } = useParams();
	const [car, setCar] = useState({});
	const [carData, setCarData] = useState([]);
	const [fName, setFname] = useState([""]);
	const [fCategory, setFcategory] = useState([""]);
	const [fStatus, setFstatus] = useState([""]);
	const [fPrice, setFprice] = useState([""]);
	
	
	useEffect(() => {
	  axios
		.get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
		.then((res) => {
		  console.log(res);
		  setCar(res.data);
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
		  <Nav3/>
		  
		  <div>
			<section class="container2" style={{ height: "200px" }}>
			  <div class="container h-100"></div>
			</section>
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
		  </div>
		  
		  <div className="container">

		  
		  <div className="row">
			<div className="col-lg-7">
			  <div className="card h-1000">
				<div className="card-body">
				  <br />
				  <div className="container">

				  <h5 className="mb-2">Tentang Paket</h5>
				  <p className="std-font">Include</p>
				  <ul style={{ fontSize: "14px" }}>
					<li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
					<li>Sudah termasuk bensin selama 12 jam</li>
					<li>Sudah termasuk Tiket Wisata</li>
					<li>Sudah termasuk pajak</li>
				  </ul>
				  <p className="std-font">Exclude</p>
				  <ul style={{ fontSize: "14px" }}>
					<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
					<li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
					<li>Tidak termasuk akomodasi penginapan</li>
				  </ul>
				  <p className="std-font">Refund, Reschedule, Overtime</p>
				  <ul style={{ fontSize: "14px" }}>
					<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
					<li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
					<li>Tidak termasuk akomodasi penginapan</li>
					<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
					<li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
					<li>Tidak termasuk akomodasi penginapan</li>
					<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
					<li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
					<li>Tidak termasuk akomodasi penginapan</li>
				  </ul>
				  </div>

				</div>
			  </div>
			</div>
			{Object.entries(car).length ? (
			  <div className="col-lg-5">
				<div className="card h-80">
				  <div className="card-body">
					<img src={car.image} width={350} height={190} style={{ marginBottom: "40px", marginTop: "40px", marginLeft: "40px" }} />
					<br />
					<h6 className="std-font">{car.name}</h6>
					<p>
					  {car.category === "Medium" && "4 - 6 Orang"}
					  {car.category === "small" && "2 - 4 Orang"}
					  {car.category === "medium" && "4 - 6 Orang"}
					  {car.category === "large" && "6 - 8 Orang"}
					</p>
					<h5>Total Rp. {car.price}</h5>
				  </div>
				</div>
			  </div>
			
			) : (
			  <h2></h2>
			)}
		  </div>
		  </div>
		<Footer/>

		</div>
	);
};

export default CarDetail;