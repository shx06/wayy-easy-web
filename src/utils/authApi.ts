import axios from "axios";
import { getSession } from "next-auth/react";

const authApi = axios.create({
  baseURL: process.env.NEXT_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

authApi.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authApi;
