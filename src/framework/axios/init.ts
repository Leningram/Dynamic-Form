import axios, { AxiosInstance } from 'axios';

let coreAxiosInstance: AxiosInstance;

const mode = import.meta.env.MODE;
const apiPath = mode === 'development' ? '/api' : import.meta.env.VITE_BACKEND_PATH;

function getCoreInstance(): AxiosInstance {
  if (!coreAxiosInstance) {
    coreAxiosInstance = axios.create({
      baseURL: apiPath,
      headers: {
        Source: 'web-client',
        Accept: 'application/json',
      },
      withCredentials: true,
    });
  }
  return coreAxiosInstance;
}

export const coreApiInstance: AxiosInstance = getCoreInstance();
