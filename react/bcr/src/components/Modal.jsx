import React from "react";
import { Link } from "react-router-dom";

const Modal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content" id="modalterbang">
                    <div className="modal-body">
                        <form action="#">
                        <div className="row d-flex justify-content-center">
                            <div className="col-2">
                            <div className="form-group">
                                <label htmlFor="namaMobil" className="form-label">Nama Mobil</label>
                                <input type="text" placeholder="Ketik Nama/tipe mobil" className="form-control" id="namaMobil" />
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="kategoriMobil" className="form-label">Kategori</label>
                                <select id="kategoriMobil" className="form-select" aria-label="Default select example">
                                <option selected className="hijau">Masukkan Kapasitas Mobil</option>
                                <option value="2-4 Orang">2-4 Orang</option>
                                <option value="4-6 Orang">4-6 Orang</option>
                                <option value="6-8 Orang">6-8 Orang</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="hargaMobil" className="form-label">Harga</label>
                                <select id="hargaMobil" className="form-select" aria-label="Default select example">
                                <option selected>Masukkan Harga Sewa per Hari</option>
                                <option value={400.000}>&lt; Rp.400.000 </option>
                                <option value="400.000 - 600.000"> Rp.400.000 - Rp.600.000 </option>
                                <option value="> 600.000"> &gt; Rp.600.000 </option>
                                </select>
                            </div>
                            </div>
                            <div className="col-2">
                            <div className="form-group">
                                <label htmlFor="statusMobil" className="form-label">Status</label>
                                <select id="statusMobil" className="form-select" aria-label="Default select example">
                                <option selected>Status Mobil</option>
                                <option value="Disewa"> Disewa</option>
                                <option value="Belum Disewa"> Belum Disewa </option>
                                </select>
                            </div>
                            </div>
                            <div className="col-2">
                            <a href="/search-car" Link to="/search-car" className="btn btn-sewa mt-4 text-white">Cari Mobil</a>
                            </div>
                        </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>


  
    );
};

export default Modal;