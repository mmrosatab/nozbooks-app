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

export function AuthProvider({ children }) {
  const [authorization, setAuthorization] = useState(
    getAuthorizationLocalStorage()
  );
  const [refreshToken, setRefreshToken] = useState(
    getRefreshTokenLocalStorage()
  );

  // recovery data from navigate in case of user close tab without do logout
  useEffect(() => {
    const actualAuthorization = getAuthorizationLocalStorage();
    const actualRefreshToken = getRefreshTokenLocalStorage();

    if (actualAuthorization && actualRefreshToken) {
      setAuthorization(actualAuthorization);
      setRefreshToken(actualRefreshToken);
      setAuthorizationLocalStorage(authorization);
      setRefreshTokenLocalStorage(refreshToken);
      return true;
    }
  }, [authorization, refreshToken]);

  async function login(values) {
    const response = await signInRequest(values);
    if (response) {
      // const status = response.status;
      const data = response.data;
      // const headers = response.headers;
      const authorization = response.headers.authorization;
      const refreshToken = response.headers["refresh-token"];

      const newResponse = await refreshTokenRequest(
        refreshToken,
        authorization
      );

      if (newResponse) {
        let newAuthorization = newResponse.headers.authorization;
        let newRefreshToken = newResponse.headers["refresh-token"];

        setAuthorizationLocalStorage(newAuthorization);
        setRefreshTokenLocalStorage(newRefreshToken);
        setUsernameLocalStorage(data.name);
        return true;
      }
    }
  }

  function logout() {
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
