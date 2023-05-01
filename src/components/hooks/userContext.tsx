import React, { createContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

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
  // token: any;
};
export const UserContext = createContext({} as defaultValue);
const token = window.localStorage.getItem("token");

export const ContextProvider: React.FC<contextProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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
        setError(err.response?.data.message);
      } else if (err && err instanceof AxiosError) {
        setError(err.message);
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
        navigate("/chatroom");
      }
    } catch (err) {
      if (err && err instanceof AxiosError) {
        setError(err.response?.data.message);
      } else if (err && err instanceof AxiosError) {
        alert(err.message);
      }
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
