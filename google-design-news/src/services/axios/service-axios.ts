import axios, { AxiosInstance } from "axios";

const setup = (api: AxiosInstance): AxiosInstance => {
  api.defaults.headers.common = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return interceptsResponse(api);
};

const interceptsResponse = (api: AxiosInstance): AxiosInstance => {
  api.interceptors.response.use(
    (res) => res,
    async (error) => {
      const { response, request } = error;

      if (!response) {
        console.error("bad request");
        return;
      }

      return Promise.reject(error);
    }
  );

  return api;
};

const auth = (api: AxiosInstance, token: string): AxiosInstance => {
  api.interceptors.request.use(async (config) => {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return api;
};

export const news = (): AxiosInstance => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_NEWS,
  });

  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY || "";

  return setup(auth(api, apiKey));
};
