import React from "react";
import { Link } from "react-router-dom";

const Testi= () => {
    return (
        <div>
            <section>
                <div className="container mg-57">
                <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="true">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="../assets/holder.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="../assets/holder2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="../assets/holder.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>


            </section>
        </div>
        
  
    );
};

export default Testi;