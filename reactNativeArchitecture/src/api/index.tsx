import axios from 'axios';

/* Method to create axios instance */
const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default axiosClient;
