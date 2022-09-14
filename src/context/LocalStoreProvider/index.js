export function setAuthorizationLocalStorage(authorization) {
  localStorage.setItem("Authorization", `Bearer ${authorization}`);
}

export function removeAuthorizationLocalStorage() {
  localStorage.removeItem("Authorization");
}

export function getAuthorizationLocalStorage() {
  return localStorage.getItem("Authorization");
}

export function setRefreshTokenLocalStorage(refreshToken) {
  localStorage.setItem("refreshToken", refreshToken);
}

export function removeRefreshTokenLocalStorage() {
  localStorage.removeItem("refreshToken");
}

export function getRefreshTokenLocalStorage() {
  return localStorage.getItem("refreshToken");
}

export function setUsernameLocalStorage(username) {
  localStorage.setItem("username", username);
}

export function removeUsernameLocalStorage() {
  localStorage.removeItem("username");
}

export function getUsernameLocalStorage() {
  return localStorage.getItem("username");
}
