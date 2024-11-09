import axios from 'axios';
import { API_BASE_URL } from '@/config';

const urbanGreenAxios = axios.create({
  baseURL: API_BASE_URL,
});

urbanGreenAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default urbanGreenAxios;
