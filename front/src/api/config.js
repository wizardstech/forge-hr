import axios from 'axios';
import parseJWT from '@/helpers/parseJWT';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PROXY_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + parseJWT(),
    'Accept': 'application/json'
  }
});

export default instance;
