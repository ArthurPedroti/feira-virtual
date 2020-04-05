import axios from "axios";

const api = axios.create({
  baseURL: "https://feira-virtual.herokuapp.com/",
});

export default api;
