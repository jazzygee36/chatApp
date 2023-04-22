import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignIn from "../pages/signIn";
import { ContextProvider } from "../hooks/userContext";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/users";
import ChatRoom from "../pages/chatRoom";

const Router = () => {
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          {!user ? (
            <Route path="/" element={<Login />} />
          ) : (
            <Route path="/" element={<ChatRoom />} />
          )}

          <Route path="/signup" element={<SignIn />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};
export default Router;
