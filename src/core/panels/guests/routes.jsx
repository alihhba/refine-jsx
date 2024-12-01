import HomePage from "@/pages/homePage/HomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default GuestRoutes;
