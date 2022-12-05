import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <section className="headercolor">
            <div className="container">
                <nav className="navbar navbar-expand-sm">
                    <div className="container">
                    <a class="navbar-brand" href="javascript:void(0)">
                        <img class="img-fluid" src="../assets/logo.png" alt=""/>
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynavbar" aria-controls="mynavbar" alt="tombol1">
                    <span style={{fontSize: '30px', cursor: 'pointer'}} onclick="openNav()">☰</span>
                    </button>
                    
                        <div class="collapse navbar-collapse flex-grow-0" id="">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                <a class="nav-link w400 hitam" href="#ourServices">Our Services</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link w400 hitam" href="#whyUs">Why Us</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link w400 hitam" href="#testimonial">Testimonial</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link w400 hitam" href="#faq">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div id="mynavbar" className="sidenav">
                <a href="home" classname="w700 text-dark">BCR</a><span><a href classname="closebtn" onclick="closeNav()">×</a></span>
                    <a href="#ourServices">Our Services</a>
                    <a href="#whyUs">Why Us</a>
                    <a href="#testimonial">Testimonial</a>
                    <a href="#faq">FAQ</a>
                </div>



                <div className="row align-items-center flex-column flex-md-row mg-57">
                    <div className="row align-items-center flex-column flex-md-row">
                        <div className="col">
                            <h1 className="w700 big-font py-3">Sewa &amp; Rental Mobil Terbaik di kawasan Yogyakarta</h1>
                            <p className="w700 small-font mg-16">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas 
                            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-sewa btn-lg-px-4 mg-16 mgbtm-87" style={{ backgroundColor: "#5cb85f", borderRadius: "3px" }}>
                    <Link to="/search-car" style={{ textDecoration: "none", color: "#fff" }}>
                      Mulai Sewa Mobil
                    </Link>
                  </button>
                        </div>
                        <div className="col p-0 text-end">
                        <img className="w-100" src="assets/gambarmobil.png" alt="car" />
                        </div>
                    </div>
                    </div>
            </div>
        </section>
  
    );
};

export default Nav;