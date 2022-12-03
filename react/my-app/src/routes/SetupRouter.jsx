import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CarDetail from '../pages/CarDetail';
import NotFound from '../pages/NotFound';

const SetupRouter = () => {
	return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/car/:carId" element={<CarDetail />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>    
	);
};

export default SetupRouter;