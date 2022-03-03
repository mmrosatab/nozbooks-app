import api from "./api";
import { getTokenLocalStorage } from "../context/LocalStoreProvider";
const URL_SIGN_IN = "auth/sign-in";
const URL_REFRESH_TOKEN = "auth/refresh-token";
const URL_BOOKS = "books";
const URL_BOOKS_ID = "books/";

export async function signInRequest(values) {
  try {
    const request = await api.post(URL_SIGN_IN, values);
    return request.data;
  } catch (error) {
    return null;
  }
}

// export async function signUpRequest(username, password) {
//   try {
//     const request = await api.post(URL_SIGN_UP, { username, password });
//     return request.status;
//   } catch (error) {
//     return null;
//   }
// }

// export async function forgotPasswordRequest(username) {
//   const URL = `https://segware-book-api.segware.io/api/forgot-password/${username}`;

//   try {
//     const request = await api.get(URL, { username });
//     return request.data;
//   } catch (error) {
//     return null;
//   }
// }

// export async function feedsRequest() {
//   try {
//     const token = getTokenLocalStorage();
//     const request = await api.get(URL_FEEDS, {
//       headers: {
//         Authorization: token,
//       },
//     });

//     return request.data;
//   } catch (error) {
//     return null;
//   }
// }

// export async function feedRequest(content) {
//   try {
//     const token = getTokenLocalStorage();
//     const message = { content };
//     const request = await api.post(URL_FEED, message, {
//       headers: {
//         Authorization: token,
//       },
//     });

//     return request.status;
//   } catch (error) {
//     return null;
//   }
// }

// export async function likeRequest(feedId, like) {
//   try {
//     const token = getTokenLocalStorage();
//     const message = { feedId, like };

//     const request = await api.post(URL_REACTION, message, {
//       headers: {
//         Authorization: token,
//       },
//     });

//     return request.status;
//   } catch (error) {
//     return null;
//   }
// }

// export async function loveRequest(feedId, love) {
//   try {
//     const token = getTokenLocalStorage();
//     const message = { feedId, love };
//     const request = await api.post(URL_REACTION, message, {
//       headers: {
//         Authorization: token,
//       },
//     });

//     return request.status;
//   } catch (error) {
//     return null;
//   }
// }
