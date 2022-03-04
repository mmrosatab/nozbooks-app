import React, { createContext, useEffect, useState } from "react";
import {
  setAuthorizationLocalStorage,
  removeAuthorizationLocalStorage,
  getAuthorizationLocalStorage,
  setRefreshTokenLocalStorage,
  removeRefreshTokenLocalStorage,
  getRefreshTokenLocalStorage,
  setUsernameLocalStorage,
  removeUsernameLocalStorage,
} from "../LocalStoreProvider";

import { signInRequest, refreshTokenRequest } from "../../service/request";
export const AuthContext = createContext();

const initialAuthorization = getAuthorizationLocalStorage();
const initialRefreshTokenLocalStorage = getRefreshTokenLocalStorage();

export function AuthProvider({ children }) {
  const [authorization, setAuthorization] = useState(initialAuthorization);
  const [refreshToken, setRefreshToken] = useState(
    initialRefreshTokenLocalStorage
  );

  // recovery data from navigate in case of user close tab without do logout
  useEffect(() => {
    let actualAuthorization = getAuthorizationLocalStorage();
    let actualRefreshToken = getRefreshTokenLocalStorage();
    if (actualAuthorization !== null && actualRefreshToken !== null) {
      setAuthorization(actualAuthorization);
      setRefreshToken(actualRefreshToken);
    }
  }, []);

  async function login(values) {
    const response = await signInRequest(values);

    if (response !== null) {
      const { data, headers } = response;
      const { name } = data;
      const _authorization = headers.authorization;
      const _refreshToken = headers["refresh-token"];
      const newResponse = await refreshTokenRequest(
        _refreshToken,
        _authorization
      );

      if (newResponse !== null) {
        const newAuthorization = newResponse.headers.authorization;
        const newRefreshToken = newResponse.headers["refresh-token"];
        setAuthorization(newAuthorization);
        setRefreshToken(newRefreshToken);
        setAuthorizationLocalStorage(newAuthorization);
        setRefreshTokenLocalStorage(newRefreshToken);
        setUsernameLocalStorage(name);
        return true;
      }
    }
    return null;
  }

  function logout() {
    setAuthorization(null);
    setRefreshToken(null);
    removeAuthorizationLocalStorage();
    removeRefreshTokenLocalStorage();
    removeUsernameLocalStorage();
  }

  return (
    <AuthContext.Provider
      value={{ authorization, refreshToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
