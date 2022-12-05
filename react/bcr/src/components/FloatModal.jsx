import React from "react";
import { Link } from "react-router-dom";

const FloatModal= () => {
    return (
        <div className="card position-relative top-100 start-50 translate-middle mt-4" style={{width: '1000px'}} id="modalterbang">
            <div className="card-body">
                <p className="card-title" id="modalterbang"><b>Pencarianmu</b></p>
                <form action id="modalterbang">
                <div className="row justify-content-center" id="modalterbang">
                    <div className="col-2" id="modalterbang"    > 
                    <div className="form-group" id="modalterbang">
                        <label htmlFor="namaMobil" className="form-label">Nama Mobil</label>
                        <input type="text" placeholder="Ketik Nama/tipe mobil" className="form-control" id="namaMobil" disabled />
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-group">
                        <label htmlFor="kategoriMobil" className="form-label">Kategori</label>
                        <select id="kategoriMobil" className="form-select" aria-label="Default select example" disabled>
                        <option selected>Masukkan Kapasitas Mobil</option>
                        <option value="2-4 Orang">2-4 Orang</option>
                        <option value="4-6 Orang">4-6 Orang</option>
                        <option value="6-8 Orang">6-8 Orang</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-group">
                        <label htmlFor="hargaMobil" className="form-label">Harga</label>
                        <select id="hargaMobil" className="form-select" aria-label="Default select example" disabled>
                        <option selected>Masukkan Harga Sewa per Hari</option>
                        <option value="< 400.000">&lt; Rp.400.000</option>
                        <option value="400.000 - 600.000">Rp.400.000 - Rp.600.000</option>
                        <option value="> 600.000">&gt; Rp.600.000</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="form-group">
                        <label htmlFor="statusMobil" className="form-label">Status</label>
                        <select id="statusMobil" className="form-select" aria-label="Default select example" disabled>
                        <option selected>Status Mobil</option>
                        <option value="Disewa">Disewa</option>
                        <option value="Belum Disewa">Belum Disewa</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-2">
                    <button type="button" id="modalterbang" className="btn-sewa2 mt-4">Cari Mobil</button>
                    </div>
                </div>
                </form>
            </div>
        </div>


  
    );
};

export default FloatModal;