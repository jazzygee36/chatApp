import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignIn from "../pages/signIn";
import { ContextProvider, UserContext } from "../hooks/userContext";
import ChatRoom from "../pages/chatRoom";
import ForgetPassword from "../pages/forgetPassword";
import EmailLink from "../pages/emailSent";
import SetNewPwd from "../pages/setNewPassword";
import NavbarContainer from "../common/NavContainer/navbarContainer";
import VideoCall from "../pages/video";
import Contacts from "../pages/contacts";

const Router = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/email-link" element={<EmailLink />} />
          <Route path="/setnew-password" element={<SetNewPwd />} />
          <Route path="/signup" element={<SignIn />} />
          <Route element={<NavbarContainer />}>
            <Route path="/chatroom" element={<ChatRoom />} />
            <Route path="/video" element={<VideoCall />} />
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};
export default Router;
