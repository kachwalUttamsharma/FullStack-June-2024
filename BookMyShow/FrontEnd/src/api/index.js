import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/bms",
  headers: {
    "Content-Type": "application/json",
  },
});
