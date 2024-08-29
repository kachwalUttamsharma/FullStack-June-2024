import axios from "axios";

export const axiosOptions = {
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
  },
  params: {
    api_key: "bebfc0124faabb377f06b6e90b31cd01",
  },
};

export const api = axios.create(axiosOptions);
