import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8000'
});

export default axiosInstance;
