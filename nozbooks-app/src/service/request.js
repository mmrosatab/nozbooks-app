import api from "./api";
const URL_SIGN_IN = "auth/sign-in";
const URL_REFRESH_TOKEN = "auth/refresh-token";
// const URL_BOOKS = "books";
// const URL_BOOKS_ID = "books/";

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
