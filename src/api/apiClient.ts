import axios from 'axios';
import Cookies from "js-cookie";

const apiClient = axios.create({
 baseURL: "http://74.50.82.253:8093/api/v1",

 headers: {
  "Content-Type": "application/json",
 },
}) 

apiClient.interceptors.request.use((config) => {
 const token = Cookies.get("token");
 if (token) {
  config.headers.Authorization = `Bearer ${token}`;
 }
 return config;
})

export default apiClient