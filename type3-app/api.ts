import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { User } from './constants/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config: AxiosRequestConfig = {
    baseURL: 'https://type3-fhbqaaerb4cdere4.eastus2-01.azurewebsites.net',
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    }
};

// Create an instance of axios
const api: AxiosInstance = axios.create(config);
export default api;

