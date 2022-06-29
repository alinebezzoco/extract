import axios from 'axios';

export const baseUrl = 'https://bank-extract-default-rtdb.firebaseio.com/.json';

export const HttpClient = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});