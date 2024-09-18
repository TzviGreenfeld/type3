import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';
import { Request } from '../constants/Request';

export const startRequest = async () => {
    console.log('Starting request');
    try {
        const response = await api.post('/api/Request/start', {
            type: "pfizer"
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
                }
            });
        console.log(response.data);
        await AsyncStorage.setItem('requestId', response.data.requestId);
        return response;
    } catch (error) {
        const headers = error.config?.headers;
        if (headers) {
            console.error('Request headers:', headers);
        }

        console.error('Error creating request:', error);
        throw error;
    }
};

export const getRequest = async (requestId: string) => {
    console.log('get request');
    try {
        const response = await api.get(`/api/Request/${requestId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
                }
            });
        console.log(response.data);
        return response;
    } catch (error) {
        const headers = error.config?.headers;
        if (headers) {
            console.error('Request headers:', headers);
        }

        console.error('Error creating request:', error);
        throw error;
    }
};