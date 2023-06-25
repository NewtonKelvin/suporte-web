import axios from "axios";
import "dotenv/config";
import { parseCookies } from "nookies";
import nProgress from "nprogress";

export const nextAPI = () => {
  const { "nest_suporte.token": token } = parseCookies();
  const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      "Content-type": "application/json"
    },
    timeout: 10 * 1000 // 10 segundos
  });

  if (token) {
    api.defaults.headers.common["Authorization"] = token;
  }

  api.interceptors.request.use(
    function (config) {
      nProgress.start();
      return config;
    },
    function (error) {
      nProgress.done();
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    function (response) {
      nProgress.done();
      return response;
    },
    function (error) {
      nProgress.done();
      return Promise.reject(error);
    }
  );

  return api;
};
