import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

interface contextProps {
  children: React.ReactNode;
}
type Inputs = {
  email: string;
  password: string;
};

export const UserContext = createContext("");

export const ContextProvider: React.FC<contextProps> = ({ children }) => {
  const handleLogin = (e: any) => {
    e.preventDefault();
  };

  return (
    <UserContext.Provider value={[handleLogin]}>
      {children}
    </UserContext.Provider>
  );
};
