export function setTokenLocalStorage(token) {
  localStorage.setItem("token", `Bearer ${token}`);
}

export function removeTokenLocalStorage() {
  localStorage.removeItem("token");
}

export function getTokenLocalStorage() {
  return localStorage.getItem("token");
}

export const userIsAuthenticated = getTokenLocalStorage() !== null;

export function setEmailLocalStorage(email) {
  localStorage.setItem("email", email);
}

export function removeEmailLocalStorage() {
  localStorage.removeItem("email");
}

export function getEmailLocalStorage() {
  return localStorage.getItem("email");
}
