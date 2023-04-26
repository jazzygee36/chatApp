import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

interface contextProps {
  children: React.ReactNode;
}

type defaultValue = {
  handleRegistration: any;
};
export const UserContext = createContext({} as defaultValue);

export const ContextProvider: React.FC<contextProps> = ({ children }) => {
  const handleRegistration = () => {
    axios.get("http://localhost:5000/api/register").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <UserContext.Provider value={{ handleRegistration }}>
      {children}
    </UserContext.Provider>
  );
};
