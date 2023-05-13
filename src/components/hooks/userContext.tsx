import React, { createContext, useEffect, useReducer, useState } from "react";
import axios, { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import socket from "./socketContext/socketContext";

interface contextProps {
  children: React.ReactNode;
}

type defaultValue = {
  handleRegistration: any;
  handleLogin: any;
  handleLogOut: any;
  isLoggedIn: any;
  isLoading: any;
  setIsLoading: any;
  handleforgetPwd: any;
  userMessage: any;
  handleResetPwd: any;
  handleUserMessage: any;
  SocketState: any;
  SocketDispatch: any;
  handleAddContacts: any;
};
interface socket {}
export const UserContext = createContext({} as defaultValue);
const token = window.localStorage.getItem("token");

export const ContextProvider: React.FC<contextProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [setError] = useState("");
  const [userMessage, setUserMessage] = useState(true);
  // const [contacts, setContacts] = useLocalStorage('contacts', [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  const toast = useToast();
  const navigate = useNavigate();

  const handleRegistration = async (data: any) => {
    setIsLoading(true);

    try {
      const result = await axios.post(
        "http://localhost:3000/api/register",
        data
      );
      window.localStorage.setItem("username", result.data.username);

      if (result) {
        setIsLoading(false);
        toast({
          description: "You have successfully registered",
          duration: 3000,
          isClosable: true,
          status: "success",
          position: "top-right",
        });
        navigate("/");
      }
    } catch (err) {
      if (err && err instanceof AxiosError) {
      } else if (err && err instanceof AxiosError) {
      }
    }
  };

  const handleLogin = async (data: any) => {
    setIsLoading(true);

    try {
      const result = await axios.post(
        "http://localhost:3000/api/user/login",
        data
      );

      if (result) {
        window.localStorage.setItem("token", result.data.token);
        window.localStorage.setItem("username", result.data.username);
        navigate("/chatroom");
      }
    } catch (err) {
      if (err && err instanceof AxiosError) {
        toast({
          description: "email not found ",
          duration: 2000,
          isClosable: true,
          status: "error",
          position: "top-right",
        });
      }
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleforgetPwd = async (data: any) => {
    const response = await axios.post(
      "http://localhost:3000/api/reset/password",
      data
    );
    console.log(response);
    if (response) {
      navigate("/email-link");
    }
  };

  const handleResetPwd = async (id: any) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/user/:${id}`
      );
      if (response) {
        toast({
          description: "You've successfully reset your password, Login!",
          duration: 2000,
          isClosable: true,
          status: "success",
          position: "top-right",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserMessage = async (e: any) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddContacts = () => {
    setUserMessage(true);
  };
  return (
    <UserContext.Provider
      value={{
        handleRegistration,
        handleLogin,
        handleLogOut,
        isLoggedIn,
        isLoading,
        setIsLoading,
        handleforgetPwd,
        handleResetPwd,
        userMessage,
        handleUserMessage,

        handleAddContacts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
