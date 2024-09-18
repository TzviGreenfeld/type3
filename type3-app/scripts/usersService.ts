import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';
import { Request } from '../constants/Request';

export const getUserById = async (userId: string) => {
    console.log('get user');
    try {
        const response = await api.get(`/api/Users/${userId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
                }
            });
        console.log(response.data);
        return response.data;
    } catch (error) {
        const headers = error.config?.headers;
        if (headers) {
            console.error('Request headers:', headers);
        }

        console.error('Error creating request:', error);
        throw error;
    }
};