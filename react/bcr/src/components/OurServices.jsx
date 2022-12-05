import React from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
    return (
        <section className="py-5 mg-100" id="ourServices">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col mb-2">
                        <img src="assets/img_service.png" className="img-fluid tengah width: 459px; height: 428px;" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h3 className="w700 med-font mb-4">Best Car Rental for any kind of trip in Yogyakarta!</h3>
                        <p className="small-font w700 mb-3">Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga 
                        lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <img src="assets/check.png" alt="" className="mb-2" /><span className="font-check px-3">Sewa Mobil Dengan Supir di Bali 12 Jam</span><br />
                        <img src="assets/check.png" alt="" className="mb-2" /><span className="font-check px-3">Sewa Mobil Lepas Kunci di Bali 24 Jam</span><br />
                        <img src="assets/check.png" alt="" className="mb-2" /><span className="font-check px-3">Sewa Mobil Jangka Panjang Bulanan</span><br />
                        <img src="assets/check.png" alt="" className="mb-2" /><span className="font-check px-3">Gratis Antar - Jemput Mobil di Bandara</span><br />
                        <img src="assets/check.png" alt="" className="mb-2" /><span className="font-check px-3">Layanan Airport Transfer / Drop In Out</span><br />
                    </div>
                </div>
            </div>
        </section>

  
    );
};

export default OurServices;