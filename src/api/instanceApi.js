import axios from "axios";

const instanceApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleApiError = (error) => {
  console.log(error.response?.data || error?.message);
  throw error.response?.data || error?.message;
};

// Request interceptor
instanceApi.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instanceApi;
