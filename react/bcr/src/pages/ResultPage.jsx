import React from "react";
import { Link } from "react-router-dom";

const ResultPage = () => {
	return (
		<div>
			<section id="carList">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <img src="assets/innova.png" width={310} height={190} style={{marginBottom: '40px', marginTop: '40px', marginLeft: '40px'}} /><br />
                                    <h6 className="car-name">Innova</h6>
                                    <h5 className="car-price"><b>Rp 500.000 / Hari</b></h5>
                                    <h6 style={{fontWeight: 600}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </h6>
                                    <button type="button" className="btn-sewa" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginTop: '20px'}}>
                                    Pilih Mobil
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>        
            </div>
            </section>

		</div>
	);
};

export default ResultPage;