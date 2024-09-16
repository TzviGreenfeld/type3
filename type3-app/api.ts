``// api.ts
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { User } from './types';

// Define the configuration for axios instance
const config: AxiosRequestConfig = {
    baseURL: 'https://your-backend-url.com/api', // Replace with your backend URL
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`, // If you have an auth token
    }
};

// Create an instance of axios
const api: AxiosInstance = axios.create(config);

// Optional: Add interceptors for request/response handling
api.interceptors.request.use(
    (config) => {
        // Perform actions before request is sent (e.g., add auth token)
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Handle response data
        return response;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

// export const getUsers = async (): Promise<User[]> => {
//     try {
//         const response = await api.get<User[]>('/users'); 
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         throw error; 
//     }
// };
export const getUsers = async (): Promise<User[]> => {
    return [
        { 
            name: 'John Doe', 
            age: 30, 
            phone: '123-456-7890', 
            latitude: 32.1641, 
            longitude: 34.8254 
        }, 
        { 
            name: 'Jane Smith', 
            age: 28, 
            phone: '987-654-3210', 
            latitude: 32.1717, 
            longitude: 34.8250 
        },
        { 
            name: 'Alice Johnson', 
            age: 35, 
            phone: '555-555-5555', 
            latitude: 32.1560, 
            longitude: 34.8321 
        } 
    ];
};


export default api;



