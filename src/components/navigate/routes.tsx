import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignIn from "../pages/signIn";
import { ContextProvider } from "../hooks/userContext";

const Router = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignIn />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};
export default Router;
