import axios from "axios";

export const itunesApi = axios.create({
  baseURL: import.meta.env.VITE_ITUNES_API,
})
