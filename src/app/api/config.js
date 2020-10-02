import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://me-frontend-challenge-api.herokuapp.com/',
});

