import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
