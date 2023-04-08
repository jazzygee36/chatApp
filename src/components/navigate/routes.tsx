import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignIn from "../pages/signIn";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
