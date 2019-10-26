import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3332', // android studio
  // baseURL: 'http://10.0.3.2:3332', // genymotion
  // baseURL: 'http://localhost:3332', // ios
  // baseURL: 'http://ip_da_rede:3332', // via usb
});

export default api;
