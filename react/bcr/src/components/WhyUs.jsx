import React from "react";
import { Link } from "react-router-dom";

const WhyUs = () => {
    return (
        <section className="mg-100" id="whyUs">
            <div className="container">
                <div className="row">
                <h2 className="w700 med-font mb-3">Why Us?</h2>
                <p className="mb-4 w700 small-font">Mengapa harus pilih Binar Car Rental?</p>
                <div className="col-lg-3">
                    <div className="card card-flex py-2 px-2 mb-2">
                    <div className="card-body py-2 px-2 mb-2">
                        <img className="icon py-2" src="assets/thumbs.png" /><br />
                        <b className="std-font">Mobil Lengkap</b>
                        <p className="mg-16">Tersedia banyak pilihan mobil, <br/> semua kondisi masih baru,  bersih dan terawat</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-flex py-2 px-2 mb-2">
                    <div className="card-body py-2 px-2 mb-2">
                        <img className="icon py-2" src="assets/tag.png" /><br />
                        <b className="std-font">Harga Murah</b>
                        <p className="mg-16">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card py-2 px-2 mb-2">
                    <div className="card-body py-2 px-2 mb-2">
                        <img className="icon py-2" src="assets/clock.png" /><br />
                        <b className="std-font">Layanan 24 Jam</b>
                        <p className="mg-16">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-flex py-2 px-2 mb-2">
                    <div className="card-body py-2 px-2 mb-2">
                        <img className="icon py-2" src="assets/award.png" /><br />
                        <b className="std-font">Sopir Profesional</b>
                        <p className="mg-16">Sopir yang profesional, berpengalaman, jujur, dan tentu ramah dan selalu tepat waktu</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

  
    );
};

export default WhyUs;