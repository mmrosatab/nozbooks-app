import axios from "axios";
const baseURL = "http://books.appnoz.com.br/api/v1";

const api = {
  get: (url, config) => {
    if(config){
      return axios.get(baseURL+url, config);
    }
    return axios.get(baseURL+url);
  },
  post: (url, data, config) => {
    if(config){
      return axios.post(baseURL+url, data,  config);
    }
    return axios.post(baseURL+url, data);
  },
}

export default api;
