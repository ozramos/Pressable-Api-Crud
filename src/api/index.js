import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  /* other custom settings */
});

export default api