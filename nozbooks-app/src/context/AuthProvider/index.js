import React, { createContext, useEffect, useState } from "react";
import {
  getTokenLocalStorage,
  removeTokenLocalStorage,
  setTokenLocalStorage,
  setEmailLocalStorage,
  removeEmailLocalStorage,
} from "../LocalStoreProvider";
import { signInRequest } from "../../service/request";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getTokenLocalStorage());

  useEffect(() => {
    const actualToken = getTokenLocalStorage();

    if (actualToken) {
      setToken(actualToken);
    }
  }, []);

  async function login(values) {
    // const actualToken = await signInRequest(values);
    // if (actualToken) {
    //   setToken(actualToken);
    //   setTokenLocalStorage(actualToken);
    //   setEmailLocalStorage(values.email);
    //   return true;
    // }
  }

  function logout() {
    setToken(null);
    removeTokenLocalStorage();
    removeEmailLocalStorage();
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
