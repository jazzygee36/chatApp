import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignIn from "../pages/signIn";
import { ContextProvider, UserContext } from "../hooks/userContext";
import ChatRoom from "../pages/chatRoom";

const Router = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};
export default Router;
