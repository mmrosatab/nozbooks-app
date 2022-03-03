import axios from "axios";

const api = axios.create({
  baseURL: "http://books.appnoz.com.br/api/v1",
});

export default api;
