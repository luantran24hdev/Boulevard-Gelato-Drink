import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://api-meme-zendvn-01.herokuapp.com/api/',
  // timeout: 1000,
  headers: {
    accept: 'application/json',
  },
});

export default axiosInstance;
