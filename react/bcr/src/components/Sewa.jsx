import React from "react";
import { Link } from "react-router-dom";

const Sewa = () => {
    return (
        <section id="sewa" className="mg-100">
            <div className="container sewa">
                <div className="card text-center">
                    <div className="card-body">
                        <h2 className="card-title">Sewa Mobil di Yogyakarta Sekarang!</h2>
                        <p className="mg-16" style={{color: 'white', fontWeight: 640}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> <br /><br />
                        <button type="button" className="btn-sewa" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Mulai Sewa Mobil
                        </button> 
                    </div>
                </div>      
            </div>
        </section>

  
    );
};

export default Sewa;