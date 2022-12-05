import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mb-3 mg-100 mgbtm-87">
            <div className="container mg-100 mgbtm-87">
                <div className="row">
                <div className="col-lg-3">
                    <p className="small-font">
                    Jalan Suroyo No. 161 Mayangan Kota <br />Probolonggo 672000 <br /><br />
                    binarcarrental@gmail.com <br /><br />
                    081-233-334-808
                    </p>
                </div>
                <div className="col-lg-3">
                    <p className="footer small-font">
                    Our Services <br /><br />
                    Why Us <br /><br />
                    Testimonial <br /><br />
                    FAQ
                    </p>
                </div>
                <div className="col-lg-3 small-font">
                    <p className="footer">
                    Connect with us <br /><br />
                    <img src="assets/fb.png" width={32} height={32} style={{marginBottom: '20px'}} />
                    <img src="assets/ig.png" width={30} height={30} style={{marginBottom: '20px', marginLeft: '12px'}} />
                    <img src="assets/twitter.png" width={30} height={30} style={{marginBottom: '20px', marginLeft: '12px'}} />
                    <img src="assets/mail.png" width={30} height={30} style={{marginBottom: '20px', marginLeft: '12px'}} />
                    <img src="assets/twitch.png" width={30} height={30} style={{marginBottom: '20px', marginLeft: '12px'}} />
                    </p>
                </div>
                <div className="col-lg-3">
                    <p className="footer small-font">
                    Copyright Binar 2022 <br /><br />
                    <img src="assets/logo.png" alt="" />
                    </p>
                </div>
                </div>
            </div>
        </footer>


  
    );
};

export default Footer;