import React from "react";
import { Link } from "react-router-dom";

const Nav3 = () => {
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

            </div>
        </section>
  
    );
};

export default Nav3;