import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  headers: {
    "x-api-key":  import.meta.env.VITE_SERVER_API_KEY,
  },
});
