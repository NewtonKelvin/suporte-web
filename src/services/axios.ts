import { CookiesType } from "@/types/cookies";
import axios from "axios";
import "dotenv/config";
import { parseCookies } from "nookies";
import nProgress from "nprogress";

export const nextAPI = () => {
	const { web_token }: CookiesType = parseCookies();
	const api = axios.create({
		baseURL: process.env.API_URL,
		headers: {
			"Content-type": "application/json"
		},
		withCredentials: false,
		timeout: 10 * 1000 // 10 segundos
	});

	api.defaults.headers.common["Authorization"] = web_token;
	api.defaults.withCredentials = false;

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
