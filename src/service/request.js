import api from "./api";
import {
  getRefreshTokenLocalStorage,
  getAuthorizationLocalStorage,
} from "../context/LocalStoreProvider";
const URL_SIGN_IN = "/auth/sign-in";
const URL_REFRESH_TOKEN = "/auth/refresh-token";
const URL_BOOKS = "/books";

export async function signInRequest(values) {
  try {
    const request = await api.post(URL_SIGN_IN, values);
    return request;
  } catch (error) {
    return null;
  }
}

export async function refreshTokenRequest(refreshToken, authorization) {
  try {
    const request = await api.post(
      URL_REFRESH_TOKEN,
      { refreshToken },
      {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      }
    );
    return request;
  } catch (error) {
    return null;
  }
}

export async function booksRequest() {
  const refreshToken = getRefreshTokenLocalStorage();
  const authorization = getAuthorizationLocalStorage();

  try {
    const request = await api.get(URL_BOOKS, {
      refreshToken,
      params: { page: "1", amount: "28", category: "biographies" },
      headers: {
        Authorization: authorization,
      },
    });
    return request;
  } catch (error) {
    return null;
  }
}

export async function booksByIdRequest(id) {
  const refreshToken = getRefreshTokenLocalStorage();
  const authorization = getAuthorizationLocalStorage();

  try {
    const request = await api.get(`${URL_BOOKS}/${id}`, {
      refreshToken,
      headers: {
        Authorization: authorization,
      },
    });
    return request;
  } catch (error) {
    return null;
  }
}
